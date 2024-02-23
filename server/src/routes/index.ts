import { Router } from "express";
import { errorRouter } from "./error";
import { userRouter } from "./user";

const router = Router();
router.use("/", userRouter);
router.use("/*", errorRouter);

export { router };
