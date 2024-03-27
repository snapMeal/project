import { NextFunction, Request, Response } from "express";
import { APIResponse } from "../utils/responseHandeler";
import { APIError } from "../utils/errorHandler";

async function saveOrder(req: Request, res: Response, next: NextFunction) {
    const payload = req.body.order;
    try {
        if (payload.length===0) {
            throw new APIError(
                "empty order?",
                400
            );
        }
        console.log("order recived ", payload);
        res.json(APIResponse("order recived", 200, {}, true)).status(200);
    } catch (error) {
        next(error);
    }
}

export const orderController = { saveOrder };
