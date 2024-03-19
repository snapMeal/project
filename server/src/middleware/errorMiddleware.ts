import { NextFunction, Request, Response } from "express";
import { APIResponse } from "../utils/responseHandeler";
import { APIError } from "../utils/errorHandler";

export function errorMiddleware(
    error: APIError,
    _: Request,
    res: Response,
    next: NextFunction
) {
    res.json(
        APIResponse(error.message, error.status || 520, error.stack, false)
    ).status(error.status || 520);
}
