import { Router } from 'express';
import { updateJobSeekerProfileController, updateJobSeekerResume } from '../../controllers/jobSeeker/jobSeekerController';
import passport from '../../config/passport';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.post('/resume',passport.authenticate('jwt', {session:false}),updateJobSeekerResume);

export default jobSeekerProfileRouter;
