import { Request,Response } from 'express';
import { updateJobSeekerProfile } from '../../services/jobSeeker/jobSeekerProfile';
import { JobSeekerProfile } from '../../entities/JobSeekerProfile';
import multer from 'multer';
import { storage, fileFilter } from '../../config/multer';
import { promisify } from 'util';

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
   
    const upload = promisify(multer({
      storage,
      fileFilter
    }).single('file'));

    await upload(req, res);
    const { id } = req.body;
   
    let jobSeekerParams: JobSeekerProfile = req.body;
    if (!req.file) {
      jobSeekerParams.resume = 'Empty file'
    } else {
      jobSeekerParams.resume = req.file.path
    };
   
    const jobSeekerProfile = await updateJobSeekerProfile(id,jobSeekerParams)
    return res.status(200).json(
      { message: 'success' }
    );

    
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}