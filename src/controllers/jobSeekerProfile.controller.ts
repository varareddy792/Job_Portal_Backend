import { Request,Response } from 'express';
import { getEducation, saveEducation, updateJobSeekerProfile } from '../services/jobSeekerProfile.service';
import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';
import multer from 'multer';
import { storageResume, fileFilterDocument,fileFilterImage} from '../config/multer';
import { promisify } from 'util';
import 'dotenv/config';

export const updateJobSeekerProfileController = async (req: Request, res: Response) => {
  try {

    const jobSeekerParams:JobSeekerProfile = req.body;
    const jobSeekerProfileData = await updateJobSeekerProfile(jobSeekerParams.id, jobSeekerParams);
    return res.status(200).json({
      data:jobSeekerProfileData
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export const updateJobSeekerResume = async (req: Request, res: Response) => {
  try {
    if (process.env.FILE_LIMIT === undefined) {
      throw new Error('file limit cannot be undefined')
    }
    
    const upload = promisify(multer({
      storage:storageResume,
      fileFilter: fileFilterDocument,
      limits: { fileSize: parseInt(process.env.FILE_LIMIT) }
    }).single('file'));

    await upload(req, res);
    const { id } = req.user;;
   
    let jobSeekerParams: JobSeekerProfile = req.body;
    if (!req.file) {
      jobSeekerParams.resume = 'Empty file'
    } else {
      jobSeekerParams.resume = req.file.path
    };
   
    const jobSeekerProfile = await updateJobSeekerProfile(id, jobSeekerParams)
    return res.status(200).json(
      { message: 'success' }
    );
    
  } catch (error) {
    console.log('error', error);
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          message: 'File size larger then 2MB'
        })
      } 
    } else {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message
        });
      } else {
        return res.status(500).json({
          message: 'Internal server error'
        });
      }      
    }
  }
}

export const addOrUpdateEducation = async (req: Request, res: Response) => {
  try {
    const user = await saveEducation(req.body);
    res.status(201).json({
      message: 'Education details added successfully',
      data: user
    });
  } catch (error:any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}

export const getEducationDetails = async (req: Request, res: Response) => {
  try {
    const education = await getEducation();
    res.status(200).json({
      data: education
    });
  } catch (error:any) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.sqlMessage
    });
  }
}