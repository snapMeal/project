import { NextFunction, Request, Response } from "express";
import { APIResponse } from "../utils/responseHandeler";
import { APIError } from "../utils/errorHandler";

export function errorMiddleware(
    error: APIError,
    _: Request,
    res: Response,
    next: NextFunction
) {
    res.status(error.status || 520).json(
        APIResponse(error.message, error.status || 520, error.stack, false)
    );
}
