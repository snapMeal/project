import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import {orderController} from "../controller/order"
const orderRouter = Router();

orderRouter.post("/order", asyncHandler(orderController.saveOrder));

export { orderRouter };
