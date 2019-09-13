import bcrypt from "bcrypt";
import faker from "faker";
import moment from "moment";
import mongoose from "mongoose";
import emojis from "./emojis";
import { contrast, getRandomInt, RGB } from "./util";
import User from "./models/user";
import Message from "./models/message";
import dotenv from "dotenv";

dotenv.config();

let dbUrl;

if (process.env.NODE_ENV === "development") {
  dbUrl = "mongodb://localhost/chat";
} else {
  dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;
}

mongoose.connect(dbUrl, { useNewUrlParser: true });

const createUsers = async (nUsers = 10) => {
  const users = Array(nUsers)
    .fill(0)
    .map(() => {
      const bgColor = [
        getRandomInt(0, 255),
        getRandomInt(0, 255),
        getRandomInt(0, 255)
      ];
      const frontColor =
        contrast(bgColor as RGB, [0, 0, 0]) < 4.5 ? "#fff" : "#000";

      return {
        email: faker.internet.email(),
        password: bcrypt.hashSync(faker.internet.password(), 10),
        displayName: faker.name.firstName() + " " + faker.name.lastName(),
        avatar: emojis[getRandomInt(0, emojis.length - 1)],
        colors: {
          bg: `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`,
          front: frontColor
        }
      };
    });
  users.push(
    {
      email: "guest@guest.com",
      password: bcrypt.hashSync("guest", 10),
      displayName: "Guest Guesterson",
      avatar: "🤠",
      colors: {
        bg: "rebeccapurple",
        front: "white"
      }
    },
    {
      email: "duca@duca.com",
      password: bcrypt.hashSync("duca", 10),
      displayName: "Dusan Jovanov",
      avatar: "🙂",
      colors: {
        bg: "cadetblue",
        front: "white"
      }
    }
  );

  await User.deleteMany({});
  await User.create(users);
  console.log("Users saved successfully");
};

const createMessages = async (nDays = 50, nMessagesPerDay = 10) => {
  const messageInterval = 24 / nMessagesPerDay;
  const nextTime = moment()
    .utc()
    .subtract(nDays, "days")
    .set("hour", 0);

  const createMessage = (userId, sentAt) => {
    const textEmojis = Array(getRandomInt(0, 2))
      .fill("")
      .map(() => emojis[getRandomInt(0, emojis.length - 1)]);

    return {
      user: userId,
      text: faker.lorem.sentence() + " " + textEmojis.join(""),
      sentAt
    };
  };

  const users = await User.find({}).exec();

  const messages = Array(nDays)
    .fill(0)
    .reduce(final => {
      final = final.concat(
        Array(nMessagesPerDay)
          .fill(0)
          .map(() => {
            const date = nextTime.toDate();
            nextTime.add(Math.floor(messageInterval), "hours");
            return createMessage(
              users[getRandomInt(0, users.length - 1)]._id,
              date
            );
          })
      );
      nextTime.add(1, "days").set("hour", 0);
      return final;
    }, []);

  await Message.deleteMany({});
  await Message.create(messages);
  console.log("Messages saved successfully");
};

createUsers(5)
  .then(() => createMessages(10, 5))
  .then(() => mongoose.connection.close());
