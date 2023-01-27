import { Request, Response } from "express";
import { createUser, getUsers, getUser, updateUser, removeUser } from "../services/users.service";
import { sendResponse } from "../utils/responses";

export const getAll = async (req: Request, res: Response) => {
    const response = await getUsers()
    return sendResponse(res, 200, response)
}

export const getById = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const response = await getUser(userId)
    return sendResponse(res, 200, response)
}

export const create = async (req: Request, res: Response) => {
    const response = await createUser(req.body)
    return sendResponse(res, 200, response)
}

export const update = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const response = await updateUser(userId, req.body)
    return sendResponse(res, 200, response)
}

export const deleteUser = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const response = await removeUser(userId)
    return sendResponse(res, 200, response)
}
