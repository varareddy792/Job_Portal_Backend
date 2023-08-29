import { Router } from 'express';
import {
  addOrUpdateEducation,
  getEducationDetails,
  updateJobSeekerProfileController,
  getJobSeekerProfileController,
  updateJobSeekerResume,
  updateJobSeekerProfilePicture,
  deleteJobSeekerResume,
} from '../controllers/jobSeekerProfile.controller';
import passport from '../config/passport';
import { resumeHeadlineController } from '../controllers/resumeHeadline.controller';
import { keySkillsController, keySkillsGetController } from '../controllers/keySkills.controller';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.put('/resume', passport.authenticate('jwt', { session: false }), updateJobSeekerResume);
jobSeekerProfileRouter.put('/resumeDelete', passport.authenticate('jwt', { session: false }), deleteJobSeekerResume);
jobSeekerProfileRouter.put('/profilePicture', passport.authenticate('jwt', { session: false }), updateJobSeekerProfilePicture);
jobSeekerProfileRouter.post('/education', addOrUpdateEducation);
jobSeekerProfileRouter.get('/getEducation', getEducationDetails);
jobSeekerProfileRouter.put('/profileDashboard', passport.authenticate('jwt', { session: false }), updateJobSeekerProfileController);
jobSeekerProfileRouter.get('/getProfileDashboard', passport.authenticate('jwt', { session: false }), getJobSeekerProfileController);

jobSeekerProfileRouter.post('/resumeHeadline', passport.authenticate('jwt', { session: false }), resumeHeadlineController);
jobSeekerProfileRouter.post('/keySkills', passport.authenticate('jwt', { session: false }), keySkillsController);
jobSeekerProfileRouter.get('/keySkills', passport.authenticate('jwt', { session: false }), keySkillsGetController);

export default jobSeekerProfileRouter;
