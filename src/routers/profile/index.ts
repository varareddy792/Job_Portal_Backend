import { Router } from "express";
import { resumeHeadlineController } from "../../controllers/profile/resumeHeadline";
import { keySkillsController, keySkillsGetController } from "../../controllers/profile/keySkills";

const profileRouter = Router();

profileRouter.post('/resumeHeadline', resumeHeadlineController);
profileRouter.get('/resumeHeadline/:id', resumeHeadlineController);
profileRouter.post('/keySkills', keySkillsController);
profileRouter.get('/keySkills/:id', keySkillsGetController);

export default profileRouter;