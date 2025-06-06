"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    var _a, _b, _c;
    const message = (_a = err.message) !== null && _a !== void 0 ? _a : "system error";
    const statusCode = (_b = err.statusCode) !== null && _b !== void 0 ? _b : 500;
    const status = (_c = err.status) !== null && _c !== void 0 ? _c : "error";
    const success = false;
    res.status(statusCode).json({
        message,
        status,
        success,
    });
};
exports.errorHandler = errorHandler;
