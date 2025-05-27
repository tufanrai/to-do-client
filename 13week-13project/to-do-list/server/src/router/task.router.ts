import express from "express";
import {
  createList,
  readList,
  remList,
  updateList,
} from "../controller/list.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", authenticate, createList);
router.get("/", authenticate, readList);
router.put("/", authenticate, updateList);
router.delete("/", authenticate, remList);

export default router;
