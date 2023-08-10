import storage from '../../config/storage';
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
      storage: storage,
      // fileFilter: (req, file, cb) => {
      //   if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"
      //     || file.mimetype === "image/gif" || file.mimetype === "application/pdf" || file.mimetype === "application/msword" || file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      //     || file.mimetype === "application/x-abiword") {
      //     cb(null, true)
      //   } else {
      //     cb(null, false)
      //     cb(new Error("Error while uploading file using multer"));
      //   }
      // }
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
    return res.status(500).json({
      message:'Internal server error'
    })
  }
}