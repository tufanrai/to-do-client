import mongoose, { Schema } from "mongoose";
import { Phase } from "../types/enum.types";

const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter your to do work"],
    },
    progress: {
      type: String,
      enum: Object.values(Phase),
      default: Phase.NotDone,
    },
    disc: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const List = mongoose.model("list", listSchema);
export default List;
