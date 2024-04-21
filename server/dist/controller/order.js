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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const responseHandeler_1 = require("../utils/responseHandeler");
const errorHandler_1 = require("../utils/errorHandler");
const order_1 = __importDefault(require("../models/order"));
function saveOrder(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body.order;
        try {
            if (payload.length === 0) {
                throw new errorHandler_1.APIError("empty order?", 400);
            }
            let menu = [];
            let amount = 0;
            console.log(payload);
            payload.cart.forEach((element) => {
                menu.push({ menuId: element._id, quantity: element.quantity });
                amount += Number(element.price.replace("₹", "") * element.quantity);
            });
            const newOrder = new order_1.default({
                order: menu,
                status: "unverified",
                userId: req.user,
                otp: Math.floor(1000 + Math.random() * 9000),
            });
            newOrder.save();
            res.json((0, responseHandeler_1.APIResponse)("Order Recived", 200, {
                paymentLink: `upi://pay?pa=9873015810@ibl&tn='OTP:${newOrder.otp}'&pn=SnapMeal&cu=INR&am=${amount}`,
            }, true)).status(200);
        }
        catch (error) {
            next(error);
        }
    });
}
function getOrders(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.user) {
                const resp = yield order_1.default.find({ userId: req.user })
                    .populate({
                    path: "order.menuId", // Populate the menuId field of the order document
                    model: "MenuItem", // Use the Menu model
                })
                    .populate({
                    path: "userId", // Populate the menuId field of the order document
                    model: "user", // Use the Menu model
                }) // Populate the userId field of the order document with User model
                    .exec();
                res.json((0, responseHandeler_1.APIResponse)("Order Recived", 200, { orders: resp }, true)).status(200);
            }
            else {
                const resp = yield order_1.default.find()
                    .populate({
                    path: "order.menuId", // Populate the menuId field of the order document
                    model: "MenuItem", // Use the Menu model
                })
                    .populate({
                    path: "userId", // Populate the menuId field of the order document
                    model: "user", // Use the Menu model
                }) // Populate the userId field of the order document with User model
                    .exec();
                res.json((0, responseHandeler_1.APIResponse)("Order Recived", 200, { orders: resp }, true)).status(200);
            }
        }
        catch (error) {
            next(error);
        }
    });
}
function updateOrder(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = req.body;
        const id = payload._id;
        try {
            const data = yield order_1.default.findByIdAndUpdate({ _id: id }, payload, { new: true });
            res.json((0, responseHandeler_1.APIResponse)(`updated the order`, 200, data, true)).status(200);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.orderController = { saveOrder, getOrders, updateOrder };
