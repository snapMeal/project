import { NextFunction, Request, Response } from "express";
import { APIResponse } from "../utils/responseHandeler";
import { APIError } from "../utils/errorHandler";
import Order from "../models/order";

async function saveOrder(req: any, res: Response, next: NextFunction) {
    const payload = req.body.order;
    try {
        if (payload.length === 0) {
            throw new APIError("empty order?", 400);
        }
        let menu;
        let amount = 0;
        payload.forEach((element) => {
            menu.push({ menuId: element._id, quantity: element.quantity });
            amount += element.price;
        });
        const newOrder = new Order({
            order: menu,
            status: "received",
            userId: req.user,
        });
        newOrder.save();
        res.json(
            APIResponse(
                "Order Recived",
                200,
                {
                    paymentLink:
                        "upi://pay?pa=9873015810@ibl&pn=SnapMeal&cu=INR&am=" +
                        amount,
                },
                true
            )
        ).status(200);
    } catch (error) {
        next(error);
    }
}

export const orderController = { saveOrder };
