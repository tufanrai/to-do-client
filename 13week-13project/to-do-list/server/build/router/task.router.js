"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const list_controller_1 = require("../controller/list.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
router.post("/", auth_middleware_1.authenticate, list_controller_1.createList);
router.get("/", auth_middleware_1.authenticate, list_controller_1.readList);
router.put("/", auth_middleware_1.authenticate, list_controller_1.updateList);
router.delete("/", auth_middleware_1.authenticate, list_controller_1.remList);
exports.default = router;
