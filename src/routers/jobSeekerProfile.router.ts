import { Router } from 'express';
import {
  addOrUpdateEducation,
  getEducationDetails,
  updateJobSeekerProfileController,
  getJobSeekerProfileController,
  updateJobSeekerResume,
  updateJobSeekerProfilePicture
} from '../controllers/jobSeekerProfile.controller';
import passport from '../config/passport';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.post('/resume', passport.authenticate('jwt', { session: false }), updateJobSeekerResume);
jobSeekerProfileRouter.post('/profilePicture', passport.authenticate('jwt', { session: false }), updateJobSeekerProfilePicture);
jobSeekerProfileRouter.post('/education', addOrUpdateEducation);
jobSeekerProfileRouter.get('/getEducation', getEducationDetails);
jobSeekerProfileRouter.put('/profileDashboard', passport.authenticate('jwt', { session: false }), updateJobSeekerProfileController);
jobSeekerProfileRouter.get('/getProfileDashboard', passport.authenticate('jwt', { session: false }), getJobSeekerProfileController);

export default jobSeekerProfileRouter;
