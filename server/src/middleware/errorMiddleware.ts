import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils/responseHandeler";
import { APIError } from "../utils/errorHandler";

export function errorMiddleware(error:APIError,_req:Request,res:Response, next:NextFunction){
    sendResponse(res,error.message,error.status,false);
}