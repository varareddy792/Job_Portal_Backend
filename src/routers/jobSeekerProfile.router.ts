import { Router } from 'express';
import {
  addOrUpdateEducation,
  getEducationDetails,
  updateJobSeekerProfileController,
  getJobSeekerProfileController,
  updateJobSeekerResume,
  updateJobSeekerProfilePicture,
  deleteJobSeekerResume,
  addOrUpdateCareerProfile,
  getCareerProfileDetails,
} from '../controllers/jobSeekerProfile.controller';
import passport from '../config/passport';
import { keySkillsController, keySkillsGetController } from '../controllers/keySkills.controller';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.put('/resume', passport.authenticate('jwt', { session: false }), updateJobSeekerResume);
jobSeekerProfileRouter.put('/resumeDelete', passport.authenticate('jwt', { session: false }), deleteJobSeekerResume);
jobSeekerProfileRouter.put('/profilePicture', passport.authenticate('jwt', { session: false }), updateJobSeekerProfilePicture);
jobSeekerProfileRouter.post('/education', passport.authenticate('jwt', { session: false }), addOrUpdateEducation);
jobSeekerProfileRouter.get('/getEducation', passport.authenticate('jwt', { session: false }), getEducationDetails);
jobSeekerProfileRouter.put('/profileDashboard', passport.authenticate('jwt', { session: false }), updateJobSeekerProfileController);
jobSeekerProfileRouter.get('/getProfileDashboard', passport.authenticate('jwt', { session: false }), getJobSeekerProfileController);

jobSeekerProfileRouter.post('/keySkills', passport.authenticate('jwt', { session: false }), keySkillsController);
jobSeekerProfileRouter.get('/keySkills', passport.authenticate('jwt', { session: false }), keySkillsGetController);
jobSeekerProfileRouter.post('/careerProfile', passport.authenticate('jwt', { session: false }), addOrUpdateCareerProfile);
jobSeekerProfileRouter.get('/getCareerProfile', passport.authenticate('jwt', { session: false }), getCareerProfileDetails);

export default jobSeekerProfileRouter;
