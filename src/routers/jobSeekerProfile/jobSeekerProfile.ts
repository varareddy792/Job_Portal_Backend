import { Router } from 'express';
import { addOrUpdateEducation, getEducationDetails, updateJobSeekerProfileController, updateJobSeekerResume } from '../../controllers/jobSeeker/jobSeekerController';
import passport from '../../config/passport';
import { resumeHeadlineController } from '../../controllers/jobSeeker/resumeHeadline';
import { keySkillsController, keySkillsGetController } from '../../controllers/jobSeeker/keySkills';

const jobSeekerProfileRouter = Router();

jobSeekerProfileRouter.post('/resume', passport.authenticate('jwt', { session: false }), updateJobSeekerResume);

jobSeekerProfileRouter.post('/education', addOrUpdateEducation);

jobSeekerProfileRouter.get('/getEducation', getEducationDetails);

jobSeekerProfileRouter.post('/resumeHeadline', passport.authenticate('jwt', { session: false }), resumeHeadlineController);
jobSeekerProfileRouter.post('/keySkills', passport.authenticate('jwt', { session: false }), keySkillsController);
jobSeekerProfileRouter.get('/keySkills', passport.authenticate('jwt', { session: false }), keySkillsGetController);

export default jobSeekerProfileRouter;
