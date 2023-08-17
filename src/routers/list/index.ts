import { Router } from 'express';
import { stateController } from '../../controllers/list/state';
import { availabilityToJoinController } from '../../controllers/list/availabilityToJoin';
import { companyController } from '../../controllers/list/company';
import { courseController } from '../../controllers/list/course';
import { courseTypeController } from '../../controllers/list/courseType';
import { currencyController } from '../../controllers/list/currency';
import { departmentController } from '../../controllers/list/department';
import { genderController } from '../../controllers/list/gender';
import { highestQualificationController } from '../../controllers/list/highestQualification';
import { industryController } from '../../controllers/list/industry';
import { jobRoleController } from '../../controllers/list/jobRole';
import { jobTitleController } from '../../controllers/list/jobTitle';
import { keySkillsController } from '../../controllers/list/keySkills';
import { locationController } from '../../controllers/list/location';
import { noticePeriodController } from '../../controllers/list/noticePeriod';
import { roleCategoryController } from '../../controllers/list/roleCategory';
import { specializationController } from '../../controllers/list/specialization';
import { totalExpMonthList } from '../../services/list/totalExpMonth';
import { totalExpMonthController } from '../../controllers/list/totalExpMonth';
import { totalExpYearController } from '../../controllers/list/totalExpYear';
import { universityInstituteController } from '../../controllers/list/universityInstitute';

const listRouter = Router();

listRouter.get('/state', stateController);
listRouter.get('/availabilityToJoin', availabilityToJoinController);
listRouter.get('/company', companyController);
listRouter.get('/course', courseController);
listRouter.get('/courseType', courseTypeController);
listRouter.get('/currency', currencyController);
listRouter.get('/department', departmentController);
listRouter.get('/gender', genderController);
listRouter.get('/highestQualification', highestQualificationController);
listRouter.get('/industry', industryController);
listRouter.get('/jobRole', jobRoleController);
listRouter.get('/jobTitle', jobTitleController);
listRouter.get('/keySkills', keySkillsController);
listRouter.get('/location', locationController);
listRouter.get('/noticePeriod', noticePeriodController);
listRouter.get('/roleCategory', roleCategoryController);
listRouter.get('/specialization', specializationController);
listRouter.get('/totalExpMonth', totalExpMonthController);
listRouter.get('/totalExpYear', totalExpYearController);
listRouter.get('/universityInstitute', universityInstituteController);



export default listRouter;