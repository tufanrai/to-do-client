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
exports.authenticate = void 0;
const error_helper_1 = __importDefault(require("../helper/error.helper"));
const jwt_helper_1 = require("../helper/jwt.helper");
const user_model_1 = __importDefault(require("../model/user.model"));
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            throw new error_helper_1.default("access denied", 406);
        }
        if (authHeader &&
            authHeader.length > 2 &&
            !authHeader.startsWith("BEARER")) {
            throw new error_helper_1.default("access denied", 406);
        }
        const token = authHeader.split(" ")[1];
        const verified = (0, jwt_helper_1.verToken)(token);
        if (!verified) {
            throw new error_helper_1.default("access denied unauthorized user", 406);
        }
        const user = user_model_1.default.findById(verified.id);
        if (!user) {
            throw new error_helper_1.default("either the account is deleted or system failure please try again", 406);
        }
        req.user = {
            id: verified.id,
            name: verified.name,
            email: verified.email,
            password: verified.password,
        };
        next();
    }
    catch (err) {
        next(err);
    }
});
exports.authenticate = authenticate;
