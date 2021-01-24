import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import { validateRequest } from '../middlewares/validate-request'

const router = express.Router()

router.post('/api/users/signin', [
    body('email')
        .isEmail()
        .withMessage('Email not valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password not valid')
],
validateRequest,
(req: Request, res: Response) => {
    
    
})

export { router as signinRouter }

// TODO: Section 9.19