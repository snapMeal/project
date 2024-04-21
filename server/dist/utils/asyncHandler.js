"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
const asyncHandler = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch((error) => {
            console.log("error");
            next(error);
        });
    };
};
exports.asyncHandler = asyncHandler;
