import { Request, Response, Router } from "express";
const router = Router()
import { getAll, getById, update, create, deleteUser } from "../controllers/users.controller";
import { validateCreateUser, validateUpdateUser, validateUserId } from "../utils/validations";

router.use((req: Request, res: Response, next) => {
    next()
})

router.get('/', getAll)
router.post('/', validateCreateUser, create)
router.put('/:id', validateUpdateUser, update)
router.delete('/:id', validateUserId, deleteUser)
router.get('/:id', validateUserId, getById)

export default router
