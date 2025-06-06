"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConfig = (uri) => {
    mongoose_1.default
        .connect(uri)
        .then(() => console.log("server successfully connected to database 💾"))
        .catch((err) => console.log(err));
};
exports.dbConfig = dbConfig;
