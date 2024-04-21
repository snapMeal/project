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
exports.save = exports.findByField = exports.findById = void 0;
const user_1 = require("../models/user");
const errorHandler_1 = require("../utils/errorHandler");
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield user_1.User.findById(id);
            if (!data)
                throw new errorHandler_1.APIError("User not found", 404);
            return data;
        }
        catch (error) {
            throw new errorHandler_1.APIError("error occured in repo", 500);
        }
    });
}
exports.findById = findById;
function findByField(field, key) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_1.User.find({ [field]: key });
    });
}
exports.findByField = findByField;
function save(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = new user_1.User(payload);
        const data = yield newUser.save();
        return data;
    });
}
exports.save = save;
