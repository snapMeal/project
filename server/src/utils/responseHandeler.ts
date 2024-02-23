import { Response } from "express";

export const sendResponse = (
    res: Response,
    message: string,
    status: number,
    success?: boolean
): void => {
    res.json({ message: message, success: success }).status(status);
};