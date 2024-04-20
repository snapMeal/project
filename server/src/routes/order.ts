import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import {orderController} from "../controller/order"
import verifyJwt, { verifyJwtOrAdmin } from "../middleware/verifyJwt";

const orderRouter = Router();

orderRouter.post("/order",verifyJwt, asyncHandler(orderController.saveOrder));
orderRouter.get("/order",verifyJwtOrAdmin, asyncHandler(orderController.getOrders));

export { orderRouter };
