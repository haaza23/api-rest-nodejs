import { Application, Request, Response, Router } from "express";
const router = Router()
import { getAll, } from "../controllers/users.controller";

router.use((req: Request, res: Response, next) => {
    next()
})

router.get('/', getAll)

export default router
