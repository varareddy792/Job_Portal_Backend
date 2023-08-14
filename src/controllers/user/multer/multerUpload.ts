import { RequestHandler, Response } from 'express';
import { Request } from 'express-jwt';
import { fileFilter, storage } from '../../../config/multer';
import { promisify } from 'util';
import multer from 'multer';

export const multerUpload: RequestHandler = async (req: Request, res: Response) => {
  try {
    let upload = await promisify(multer({
      storage,
      fileFilter
    }).single('file'));

    await upload(req, res);
    console.log('multer data ', req.file);
    
    return res.status(200).json({
      message: 'success'
    })

  } catch (error) {
    console.error('error', error);
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
};
