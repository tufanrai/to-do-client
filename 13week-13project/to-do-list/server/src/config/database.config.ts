import mongoose from "mongoose";

export const dbConfig = (uri: string) => {
  mongoose
    .connect(uri)
    .then(() => console.log("server successfully connected to database 💾"))
    .catch((err) => console.log(err));
};
