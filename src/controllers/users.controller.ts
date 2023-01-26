import { Request, Response } from "express";
import { getOneByUsername } from "../services/users.service";
import { sendResponse } from "../utils/responses";

export const getAll = async (req: Request, res: Response) => {
    const username = 'johndoe'
    const response = await getOneByUsername(username);
    return sendResponse(res, 200, response)
}

export const getOne = async (req: Request, res: Response) => {
    const username = 'johndoe'
    const response = await getOneByUsername(username);
    return sendResponse(res, 200, response)
}

