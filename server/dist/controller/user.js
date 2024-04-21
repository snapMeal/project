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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const UserService_1 = require("../service/user/UserService");
const responseHandeler_1 = require("../utils/responseHandeler");
const errorHandler_1 = require("../utils/errorHandler");
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        try {
            if (!payload.username || !payload.password) {
                throw new errorHandler_1.APIError("validation error fill the fields correctly", 400);
            }
            const token = yield UserService_1.UserService.login(payload);
            res.json((0, responseHandeler_1.APIResponse)("login successfull", 200, { token }, true)).status(200);
        }
        catch (error) {
            next(error);
        }
    });
}
function signup(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body || {};
        try {
            const token = yield UserService_1.UserService.signup(payload);
            res.json((0, responseHandeler_1.APIResponse)("signup successfull", 200, { token }, true)).status(200);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.userController = { login, signup };
