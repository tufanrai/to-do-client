import mongoose from "mongoose";

export interface IPayload {
  id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
}
