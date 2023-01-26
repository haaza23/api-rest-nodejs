import { Response } from "express";

export const sendResponse = (res: Response, statusCode: number, body: any) => {
    return res.status(statusCode).json(body);
}
