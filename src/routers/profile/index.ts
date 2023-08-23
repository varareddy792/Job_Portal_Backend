import { Router } from "express";
import { resumeHeadlineController } from "../../controllers/profile/resumeHeadline";

const profileRouter = Router();

profileRouter.post('/resumeHeadline', resumeHeadlineController);
profileRouter.get('/resumeHeadline/:id', resumeHeadlineController);
profileRouter.post('/keySkills', resumeHeadlineController);

export default profileRouter;