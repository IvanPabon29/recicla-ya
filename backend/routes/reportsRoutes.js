import { Router } from 'express';
import { query } from 'express-validator';
import { authRequired } from '../middlewares/auth.js';
import { userSummary } from '../controllers/reports.controller.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

// Resumen de usuario (totales y agrupaciones)
router.get(
  '/user/summary',
  authRequired,
  [
    query('from').optional().isISO8601(),
    query('to').optional().isISO8601()
  ],
  validate,
  userSummary
);

export default router;
