import { NextFunction, Request, Response } from "express";
import { IUser } from "../interface/user";
import { UserService } from "../service/user/UserService";
import { sendResponse } from "../utils/responseHandeler";

async function login(req:Request,res:Response,next:NextFunction){
    const payload:IUser = req.body;
    UserService.login(payload);
    sendResponse(res,"login successfull",200,true);
}

export const userController = {login}