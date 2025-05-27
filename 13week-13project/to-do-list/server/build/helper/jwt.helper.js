"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.verToken = exports.genToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : "";
const JWT_EXPIRY_DATE = process.env.JWT_EXPIRY_DATE;
// genterate token
const genToken = (data) => {
    return jsonwebtoken_1.default.sign(data, JWT_SECRET, { expiresIn: JWT_EXPIRY_DATE });
};
exports.genToken = genToken;
// verify token
const verToken = (token) => {
    return jsonwebtoken_1.default.verify(token, JWT_SECRET);
};
exports.verToken = verToken;
