import {storage,fileFilter} from '../../config/multer';
import { Request, RequestHandler, Response, NextFunction } from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import { promisify } from 'util';
import { saveUser } from '../../services/user/userService';
import { saveJobSeekerProfile } from '../../services/jobSeeker/jobSeekerProfile';
import { generateToken } from '../../utils/generateToken';

export const registerUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
   
    const { workStatus, ...userParams} = req.body;
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userParams.password, saltRounds).then(function (hash) { return hash });
    userParams.hashedPassword = hashedPassword;
    delete userParams.password;

    let upload = await promisify(multer({
      storage,
      fileFilter
    }).single('file'));

    await upload(req, res);
    
    if (!req.file) {
      userParams.resumePath = 'no path';
    } else {
      userParams.resumePath = req.file.path;
    };

    const user = await saveUser(userParams);
   
    switch (user.userType) {
      case 'jobSeeker': {
        const jobSeekerParams = {
          userId:user.id,
          workStatus
        }
       const  jobSeeker =  await saveJobSeekerProfile(jobSeekerParams);
        
      }
    }
    const token = await generateToken(user);
    res.cookie('token', token);
    return res.status(201).json({
      message: 'User successfully saved',
      data: user,
    });
  
    
   

  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message:'Internal server error'
    })
  };
}