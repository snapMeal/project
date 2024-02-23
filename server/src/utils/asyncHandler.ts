import { NextFunction, Request, Response } from "express"
import { APIError } from "./errorHandler"
import { sendResponse } from "./responseHandeler"

export const asyncHandler = (func) => {
    return (req:Request, res:Response, next:NextFunction) => {
        func(req, res, next).catch((error: APIError) => {
            console.log(error);
            sendResponse(res, error.message, error.status, false)
        })
    }
}