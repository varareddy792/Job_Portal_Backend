import { Router } from 'express';
import authRouter from './auth/auth';
import multerRouter from './multer/multer';

const router = Router();

router.use(['/auth'], authRouter);
router.use(['/multer'], multerRouter);

export default router;
