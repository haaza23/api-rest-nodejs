import { Request, Response, Router } from "express";
const router = Router()
import { getAll, getById, update, create, deleteUser } from "../controllers/users.controller";

router.use((req: Request, res: Response, next) => {
    next()
})

router.get('/', getAll)
router.post('/', create)
router.put('/', update)
router.delete('/', deleteUser)
router.get('/:id', getById)

export default router
