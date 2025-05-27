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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remUser = exports.updateUser = exports.LogUser = exports.SignUp = void 0;
const asyncHandler_1 = require("../helper/asyncHandler");
const error_helper_1 = __importDefault(require("../helper/error.helper"));
const user_model_1 = __importDefault(require("../model/user.model"));
const bcrypt_helper_1 = require("../helper/bcrypt.helper");
const jwt_helper_1 = require("../helper/jwt.helper");
// registe or signup user
exports.SignUp = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { password } = _a, data = __rest(_a, ["password"]);
    if (!password) {
        throw new error_helper_1.default("please enter passwrod", 406);
    }
    if (!data) {
        throw new error_helper_1.default("required datas have not completely been filled", 406);
    }
    const hashedPass = yield (0, bcrypt_helper_1.hasPass)(password);
    const user = yield user_model_1.default.create(Object.assign({ password: hashedPass }, data));
    res.status(200).json({
        message: "user successfully created",
        status: "success",
        data: user,
        success: true,
    });
}));
// login user
exports.LogUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new error_helper_1.default("please enter all the required datas", 406);
    }
    const user = yield user_model_1.default.findOne({ email });
    if (!user) {
        throw new error_helper_1.default("user does not exist", 404);
    }
    const verPass = (0, bcrypt_helper_1.comPass)(password, user.password);
    if (!verPass) {
        throw new error_helper_1.default("wrong email or password", 406);
    }
    const token = (0, jwt_helper_1.genToken)({
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
    });
    res.status(200).json({
        message: "successfully loged in ",
        status: "success",
        data: user,
        success: true,
        access_token: token,
    });
}));
// update user id
exports.updateUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const { id } = req.user;
    const user = yield user_model_1.default.findOne({ _id: id });
    if (!user) {
        throw new error_helper_1.default("user does not exists", 406);
    }
    if (name)
        user.name = name;
    if (email)
        user.email = email;
    if (password)
        user.password = password;
    user.save();
    res.status(200).json({
        message: "user data successfully updated",
        status: "success",
        data: user,
        success: true,
    });
}));
// remove or delete user
exports.remUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    user_model_1.default.findByIdAndDelete(id);
    res.status(200).json({
        message: "successfully deleted user",
        status: "success",
        success: true,
    });
}));
