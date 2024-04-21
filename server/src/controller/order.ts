import { NextFunction, Request, Response } from "express";
import { APIResponse } from "../utils/responseHandeler";
import { APIError } from "../utils/errorHandler";
import Order from "../models/order";
import { Menu } from "../models/menu";

async function saveOrder(req: any, res: Response, next: NextFunction) {
    const payload = req.body.order;
    try {
        if (payload.length === 0) {
            throw new APIError("empty order?", 400);
        }
        let menu: any = [];
        let amount = 0;
        console.log(payload);
        payload.cart.forEach((element) => {
            menu.push({ menuId: element._id, quantity: element.quantity });
            amount += Number(element.price.replace("₹", "") * element.quantity);
        });
        const newOrder = new Order({
            order: menu,
            status: "received",
            userId: req.user,
            otp: Math.floor(1000 + Math.random() * 9000),
        });
        newOrder.save();
        res.json(
            APIResponse(
                "Order Recived",
                200,
                {
                    paymentLink: `upi://pay?pa=9873015810@ibl&tn='OTP:${newOrder.otp}'&pn=SnapMeal&cu=INR&am=${amount}`,
                },
                true
            )
        ).status(200);
    } catch (error) {
        next(error);
    }
}

async function getOrders(req: any, res: Response, next: NextFunction) {
    try {
        if (req.user) {
            const resp: any = await Order.find({ userId: req.user })
                .populate({
                    path: "order.menuId", // Populate the menuId field of the order document
                    model: "MenuItem", // Use the Menu model
                })
                .populate({
                    path: "userId", // Populate the menuId field of the order document
                    model: "user", // Use the Menu model
                }) // Populate the userId field of the order document with User model
                .exec();
            res.json(
                APIResponse("Order Recived", 200, { orders: resp }, true)
            ).status(200);
        } else {
            const resp: any = await Order.find()
                .populate({
                    path: "order.menuId", // Populate the menuId field of the order document
                    model: "MenuItem", // Use the Menu model
                })
                .populate({
                    path: "userId", // Populate the menuId field of the order document
                    model: "user", // Use the Menu model
                }) // Populate the userId field of the order document with User model
                .exec();
            res.json(
                APIResponse("Order Recived", 200, { orders: resp }, true)
            ).status(200);
        }
    } catch (error) {
        next(error);
    }
}

export const orderController = { saveOrder, getOrders };
