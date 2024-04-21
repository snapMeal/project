"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = void 0;
const APIResponse = (message, status, data, success = true) => {
    return { message, success, status, data };
};
exports.APIResponse = APIResponse;
