import { Router } from 'express';
import { multerUpload } from '../../controllers/user/multer/multerUpload';

const multerRouter = Router();

multerRouter.post('/upload', multerUpload);

export default multerRouter;