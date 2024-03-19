import { NextFunction, Request, Response } from "express";
import { IUser } from "../interface/user";
import { UserService } from "../service/user/UserService";
import { APIResponse } from "../utils/responseHandeler";
import { APIError } from "../utils/errorHandler";

async function login(req: Request, res: Response, next: NextFunction) {
    const payload: IUser = req.body;
    try {
        if (!payload.username || !payload.password) {
            throw new APIError(
                "validation error fill the fields correctly",
                400
            );
        }
        const token = await UserService.login(payload);
        res.json(APIResponse("login successfull", 200, {token}, true)).status(200);
    } catch (error) {
        next(error);
    }
}

async function signup(req: Request, res: Response, next: NextFunction) {
    const payload: IUser = req.body || {};
    try {
        const token = await UserService.signup(payload);
        res.json(APIResponse("signup successfull", 200, {token}, true)).status(
            200
        );
    } catch (error) {
        next(error);
    }
}

export const userController = { login, signup };
