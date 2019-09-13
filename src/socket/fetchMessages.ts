import moment from "moment";
import Message from "../models/message";

const fetchMessages = async (m, socket) => {
  const lastDate = m.payload;

  const cursor = await Message.where("sentAt")
    .lt(
      moment(lastDate)
        .utc()
        .toDate()
    )
    .sort("-sentAt")
    .populate("user")
    .cursor();

  const messages = [];

  let message;
  while ((message = await cursor.next()) !== null) {
    const currentMessageTime = moment(message.sentAt).utc();
    const lastPushedMessage = messages[messages.length - 1];
    const lastPushedTime =
      lastPushedMessage && moment(lastPushedMessage.sentAt).utc();

    // older time block
    if (lastPushedTime && currentMessageTime.isBefore(lastPushedTime, "day")) {
      break;
    }
    // current time block
    else {
      messages.push(message);
    }
  }

  const payload =
    messages.length === 0 ? { isEnd: true } : { messages: messages.reverse() };

  socket.send({ type: "FETCH_MESSAGES", payload });
};

export default fetchMessages;
