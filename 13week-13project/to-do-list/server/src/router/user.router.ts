import express from "express";
import {
  LogUser,
  remUser,
  SignUp,
  updateUser,
} from "../controller/user.controller";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", LogUser);
router.put("/user", updateUser);
router.delete("/user", remUser);

export default router;
