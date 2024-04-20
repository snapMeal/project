import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import {orderController} from "../controller/order"
import verifyJwt from "../middleware/verifyJwt";

const orderRouter = Router();

orderRouter.post("/order",verifyJwt, asyncHandler(orderController.saveOrder));

export { orderRouter };
