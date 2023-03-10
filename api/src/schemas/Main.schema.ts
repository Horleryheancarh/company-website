import { body } from "express-validator";

export const contactSchema = [
  body('email').isEmail(),
  body('fullname').isString(),
  body('subject').isString(),
  body('text').isString(),
]
