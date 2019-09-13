import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sentAt: Date
});

messageSchema.virtual("id").get(function() {
  return this._id;
});

messageSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  }
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
