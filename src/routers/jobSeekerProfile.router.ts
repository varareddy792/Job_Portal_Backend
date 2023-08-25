import { Router } from 'express';
import {
  addOrUpdateEducation,
  getEducationDetails,
  updateJobSeekerProfileController,
  updateJobSeekerResume,
  updateJobSeekerProfilePicture
} from '../controllers/jobSeekerProfile.controller';
import passport from '../config/passport';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.post('/resume', passport.authenticate('jwt', { session: false }), updateJobSeekerResume);
jobSeekerProfileRouter.post('/profilePicture', passport.authenticate('jwt', { session: false }), updateJobSeekerProfilePicture);
jobSeekerProfileRouter.post('/education', addOrUpdateEducation);
jobSeekerProfileRouter.get('/getEducation',getEducationDetails);

export default jobSeekerProfileRouter;
