import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "your name is required"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
