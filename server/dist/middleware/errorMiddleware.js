"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const responseHandeler_1 = require("../utils/responseHandeler");
function errorMiddleware(error, _, res, next) {
    res.status(error.status || 520).json((0, responseHandeler_1.APIResponse)(error.message, error.status || 520, error.stack, false));
}
exports.errorMiddleware = errorMiddleware;
