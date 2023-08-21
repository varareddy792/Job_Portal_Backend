import { JobSeekerProfile } from '../../entities/JobSeekerProfile';
import { AppDataSource } from '../../config/typeorm';

type Params = {
  userId: number,
  workStatus: boolean
}

export const saveJobSeekerProfile = async (jobSeekerParams: Params) => {
  try {
    console.log('jobSeekerParams', jobSeekerParams)
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    const jobSeekerProfile =  jobSeekerProfileRepository.save(jobSeekerParams);
    console.log('dddd', jobSeekerParams)
    return jobSeekerParams;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}