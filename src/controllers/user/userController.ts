import {storage,fileFilter} from '../../config/multer';
import { Request, RequestHandler, Response, NextFunction } from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import { promisify } from 'util';
import { saveUser } from '../../services/user/userService';

export const registerUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
   
    const userParams = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userParams.password, saltRounds).then(function (hash) { return hash });
    userParams.hashedPassword = hashedPassword;
    delete userParams.password;

    let upload = await promisify(multer({
      storage,
      fileFilter
    }).single('file'));

    await upload(req, res);
    console.log('multer data ', req.file);
    if (!req.file) {
      userParams.resumePath = 'no path';
    } else {
      userParams.resumePath = req.file.path;
    };

    const result = await saveUser(userParams);
    
    return res.status(201).json({
      message: 'User successfully saved',
      data:result
    });

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message:'Internal server error'
    })
  };
}