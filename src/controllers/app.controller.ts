import { Request, Response } from "express";
import { sendResponse } from "../utils/responses";

export const ping = (req: Request, res: Response) => {
    return sendResponse(res, 200, 'Pong!')
}

