"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
const asyncHandler = (fun) => {
    return (req, res, next) => {
        Promise.resolve(fun(req, res, next)).catch((err) => next(err));
    };
};
exports.asyncHandler = asyncHandler;
