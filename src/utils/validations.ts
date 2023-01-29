import { Response, Request, NextFunction } from "express";
import { check, query, validationResult } from 'express-validator';

export const handleValidationError = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: [errors.array()]
        })
    } else {
        next()
    }
}

export const validateCreateUser = [
    check('username').isLength({ min: 5 }).withMessage('Must be at least 5 chars long'),
    check('password').isLength({ min: 8 }).withMessage('Must be at least 8 chars long'),
    check('email').isEmail().withMessage('Must have email format'),
    check('firstName').isString().isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
    check('lastName').isString().isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
    handleValidationError
]

export const validateUpdateUser = [
    check('id').isInt().withMessage('Must be an integer'),
    check('username').optional().isLength({ min: 5 }).withMessage('Must be at least 5 chars long'),
    check('password').optional().isLength({ min: 8 }).withMessage('Must be at least 8 chars long'),
    check('email').optional().isEmail().withMessage('Must have email format'),
    check('firstName').optional().isString().isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
    check('lastName').optional().isString().isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
    handleValidationError
]

export const validateUserId = [
    check('id').isInt().withMessage('Must be an integer'),
    handleValidationError
]
