"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    order: [
        {
            menuId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    status: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
        required: true,
    },
});
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
