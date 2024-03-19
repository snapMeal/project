import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { userController } from "../controller/user";

const userRouter = Router();

userRouter.post("/user/login", asyncHandler(userController.login));
userRouter.post("/user/signup", asyncHandler(userController.signup));

export { userRouter };
