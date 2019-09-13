import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import socketio from "socket.io";
import login from "./routes/login";
import logout from "./routes/logout";
import verifyToken from "./routes/verifyToken";
import fetchMessages from "./socket/fetchMessages";
import init from "./socket/init";
import sendMessage from "./socket/sendMessage";

dotenv.config();

let dbUrl;

if (process.env.NODE_ENV === "development") {
  dbUrl = "mongodb://localhost/chat";
} else {
  dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;
}

try {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (err) {
  console.log(err);
}

const app = express();
const server = createServer(app);
const io = socketio(server, { origins: "http://localhost:1234" });

app.use(cors({ origin: "http://localhost:1234", credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/login", login);
app.get("/logout", logout);
app.get("/verifyToken", verifyToken);

io.on("connection", async socket => {
  if (process.env.NODE_ENV === "development") {
    console.log(`New socket connected: ${socket.id}`);
  }

  init(socket);

  socket.on("message", async message => {
    switch (message.type) {
      case "SEND_MESSAGE": {
        sendMessage(message, socket);
        break;
      }
      case "FETCH_MESSAGES": {
        fetchMessages(message, socket);
        break;
      }
    }
  });

  if (process.env.NODE_ENV === "development") {
    socket.on("disconnect", () =>
      console.log(`Socket disconnected: ${socket.id}`)
    );
  }
});

server.listen(5000, () => console.log("Server started on port 5000"));
