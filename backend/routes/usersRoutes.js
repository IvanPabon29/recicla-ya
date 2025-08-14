import { Router } from 'express';
import { authRequired } from '../middlewares/auth.js';
import { me } from '../controllers/users.controller.js';

const router = Router();

router.get('/me', authRequired, me);

export default router;
