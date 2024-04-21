"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = void 0;
class APIError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.status = status;
        return this;
    }
}
exports.APIError = APIError;
