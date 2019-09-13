import moment from "moment";
import Message from "../models/message";

const init = async socket => {
  const cursor = await Message.find({})
    .sort("-sentAt")
    .populate("user")
    .cursor();

  const messages = [];

  let message;
  let lastMessage;
  while ((message = await cursor.next()) !== null) {
    if (
      lastMessage &&
      moment(message.sentAt)
        .utc()
        .isBefore(moment(lastMessage.sentAt).utc(), "day")
    ) {
      break;
    } else {
      messages.push(message);
      lastMessage = message;
    }
  }

  const payload =
    messages.length === 0 ? { isEnd: true } : { messages: messages.reverse() };

  socket.emit("init", payload);
};

export default init;
