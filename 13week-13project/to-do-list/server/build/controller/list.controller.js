"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remList = exports.updateList = exports.readList = exports.createList = void 0;
const asyncHandler_1 = require("../helper/asyncHandler");
const error_helper_1 = __importDefault(require("../helper/error.helper"));
const list_model_1 = __importDefault(require("../model/list.model"));
// create task
exports.createList = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const data = req.body;
    if (!data) {
        throw new error_helper_1.default("please fill the required data", 406);
    }
    const list = yield list_model_1.default.create(Object.assign({ user: id }, data));
    res.status(200).json({
        message: "list successfully created",
        status: "success",
        data: list,
        success: true,
    });
}));
// read task
exports.readList = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const list = yield list_model_1.default.find({ user: id });
    if (!list) {
        throw new error_helper_1.default("you do not have any taks", 404);
    }
    res.status(200).json({
        message: "tasks found",
        status: "success",
        data: list,
        success: true,
    });
}));
// update task
exports.updateList = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const { _id, title, progress, discription } = req.body;
    if (!_id) {
        throw new error_helper_1.default("please enter the list id", 406);
    }
    const list = yield list_model_1.default.findOne({ _id, user: id });
    if (!list) {
        throw new error_helper_1.default("list is not found", 404);
    }
    if (title)
        list.title = title;
    if (progress)
        list.progress = progress;
    if (discription)
        list.disc = discription;
    list.save();
    res.status(200).json({
        message: "task successfully updated",
        status: "success",
        data: list,
        success: true,
    });
}));
// delete task
exports.remList = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const { _id } = req.body;
    if (!_id) {
        throw new error_helper_1.default("please enter the id", 406);
    }
    list_model_1.default.findOneAndDelete({ _id, user: id });
    res.status(200).json({
        message: "task successfully deleted",
        status: "success",
        success: true,
    });
}));
