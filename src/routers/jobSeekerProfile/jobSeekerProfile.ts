import { Router } from 'express';
import { updateJobSeekerProfileController, updateJobSeekerResume } from '../../controllers/jobSeeker/jobSeekerController';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.post('/resume',updateJobSeekerResume);

export default jobSeekerProfileRouter;
