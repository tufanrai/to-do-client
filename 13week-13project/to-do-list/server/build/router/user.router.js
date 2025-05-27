"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
router.post("/signup", user_controller_1.SignUp);
router.post("/login", user_controller_1.LogUser);
router.put("/user", user_controller_1.updateUser);
router.delete("/user", user_controller_1.remUser);
exports.default = router;
