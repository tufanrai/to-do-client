import "dotenv/config";
import express, { Request, Response } from "express";
import userRouter from "./router/user.router";
import taskRouter from "./router/task.router";
import { errorHandler } from "./middleware/error.middleware";
import { dbConfig } from "./config/database.config";

// app instance
const app = express();

// essential uris'
const PORT = process.env.PORT;
const URI = process.env.DB_URI ?? "";

// db config
dbConfig(URI);

// use of middleware
app.use(express.urlencoded());

// app routing
app.use("/api/auth", userRouter);
app.use("/api/task", taskRouter);

app.use("/*spalt", (req: Request, res: Response) => {
  res.status(404).json({
    message: "search not found",
    status: "fail",
    success: false,
  });
});
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
