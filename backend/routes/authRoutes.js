import { Router } from 'express';
import { body } from 'express-validator';
import { register, login } from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

// Registro
router.post(
  '/register',
  [
    body('first_name').trim().notEmpty(),
    body('last_name').trim().notEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('phone').optional().trim(),
    body('address').optional().trim()
  ],
  validate,
  register
);

// Login (necesario para consumir endpoints protegidos)
router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty()
  ],
  validate,
  login
);

export default router;
