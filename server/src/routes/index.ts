import { Router } from "express";
import { errorRouter } from "./error";
import { userRouter } from "./user";
import { orderRouter } from "./order";
import { menuRouter } from "./menu";

const router = Router();
router.use("/", userRouter);
router.use("/", orderRouter);
router.use("/",menuRouter);
router.use("/*", errorRouter);
export { router };
