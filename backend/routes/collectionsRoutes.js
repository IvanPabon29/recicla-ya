import { Router } from 'express';
import { body, query } from 'express-validator';
import { authRequired } from '../middlewares/auth.js';
import { createCollection, listMyCollections } from '../controllers/collections.controller.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

// Programar recolección
router.post(
  '/',
  authRequired,
  [
    body('scheduled_date').isISO8601().withMessage('Fecha inválida (YYYY-MM-DD)'),
    body('time_window').isIn(['Mañana', 'Tarde', 'Noche']),
    body('waste_type').isIn(['reciclables', 'peligrosos', 'organicos', 'otros']),
    body('quantity_kg').optional().isFloat({ min: 0 }),
    body('notes').optional().isLength({ max: 255 })
  ],
  validate,
  createCollection
);

// Listado (mis recolecciones) con filtros
router.get(
  '/',
  authRequired,
  [
    query('from').optional().isISO8601(),
    query('to').optional().isISO8601(),
    query('status').optional().isIn(['programada','confirmada','en_ruta','completada','cancelada']),
    query('waste_type').optional().isIn(['reciclables','peligrosos','organicos','otros'])
  ],
  validate,
  listMyCollections
);

export default router;
