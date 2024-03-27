import { Router } from "express";
import { errorRouter } from "./error";
import { userRouter } from "./user";
import { orderRouter } from "./order";

const router = Router();
router.use("/", userRouter);
router.use("/", orderRouter);
router.use("/*", errorRouter);

export { router };
