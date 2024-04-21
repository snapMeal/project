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
exports.menuController = void 0;
const responseHandeler_1 = require("../utils/responseHandeler");
const menu_1 = require("../models/menu");
const errorHandler_1 = require("../utils/errorHandler");
function menuDetails(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const canteen = req.query.canteen;
        console.log(canteen);
        if (canteen) {
            try {
                const Items = yield menu_1.Menu.find({ canteen });
                res.json((0, responseHandeler_1.APIResponse)(`menu of the ${canteen}`, 200, Items, true)).status(200);
            }
            catch (eror) {
                next(eror);
            }
        }
        else {
            try {
                const Items = yield menu_1.Menu.find();
                res.json((0, responseHandeler_1.APIResponse)(`menu of  all the canteen`, 200, Items, true)).status(200);
            }
            catch (eror) {
                next(eror);
            }
        }
    });
}
function addMenu(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        if (payload) {
            try {
                const Item = yield menu_1.Menu.create(payload);
                res.json((0, responseHandeler_1.APIResponse)(`Created the Item`, 200, Item, true)).status(200);
            }
            catch (error) {
                next(error);
            }
        }
        else {
            throw new errorHandler_1.APIError("Detail Not Given!!", 400);
        }
    });
}
function updateMenu(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const id = req.body._id;
        try {
            const data = yield menu_1.Menu.findByIdAndUpdate({ _id: id }, payload, {
                new: true,
            });
            res.json((0, responseHandeler_1.APIResponse)(`update the item`, 200, data, true)).status(200);
        }
        catch (error) {
            next(error);
        }
    });
}
function deleteMenu(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.body._id;
        try {
            const data = yield menu_1.Menu.findByIdAndDelete(id);
            res.json((0, responseHandeler_1.APIResponse)(`deleted the item`, 200, data, true)).status(200);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.menuController = { addMenu, menuDetails, updateMenu, deleteMenu };
