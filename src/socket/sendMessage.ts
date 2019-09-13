import Message from "../models/message";

const sendMessage = async (message, socket) => {
  const { text, userId } = message.payload;

  const newMessage = await Message.create({
    text,
    user: userId,
    sentAt: new Date()
  });

  const newMessagePopulated = await newMessage.populate("user").execPopulate();

  socket.send({ type: "NEW_MESSAGE", payload: newMessagePopulated });
};

export default sendMessage;
