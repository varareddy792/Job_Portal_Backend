import { Router } from 'express';
import authRouter from './auth/auth';
import multerRouter from './multer/multer';
import jobSeekerProfileRouter from './jobSeekerProfile/jobSeekerProfile';
import listRouter from './list';

const router = Router();

router.use(['/auth'], authRouter);
router.use(['/multer'], multerRouter);
router.use(['/list'], listRouter);
router.use(['/jobSeekerProfile'], jobSeekerProfileRouter);

export default router;
