import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { userController } from "../controller/user";

const userRouter = Router();

userRouter.get("/user/login", asyncHandler(userController.login));

export { userRouter };
