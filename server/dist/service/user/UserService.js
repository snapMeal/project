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
exports.UserService = void 0;
const user_1 = require("../../repo/user");
const errorHandler_1 = require("../../utils/errorHandler");
const hashing_1 = require("../../utils/hashing");
const token_1 = require("../../utils/token");
exports.UserService = {
    login(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRec = yield (0, user_1.findByField)("username", payload.username);
            if (usersRec.length != 0) {
                const isAuthorized = yield (0, hashing_1.verifyPassword)(payload.password, usersRec[0].password);
                if (isAuthorized) {
                    return (0, token_1.generateToken)(usersRec[0]._id.toString());
                }
                else {
                    throw new errorHandler_1.APIError("username or password is wrong please check again", 400);
                }
            }
            else {
                throw new errorHandler_1.APIError("User not found", 404);
            }
        });
    },
    signup(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            payload.password = yield (0, hashing_1.hashPassword)(payload.password);
            const user = yield (0, user_1.save)(payload);
            return (0, token_1.generateToken)(user._id.toString());
        });
    },
};
