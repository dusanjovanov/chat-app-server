import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  displayName: String,
  avatar: String,
  colors: {
    bg: String,
    front: String
  }
});

userSchema.virtual("id").get(function() {
  return this._id;
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.password;
    return ret;
  }
});

const User = mongoose.model("User", userSchema);

export default User;
