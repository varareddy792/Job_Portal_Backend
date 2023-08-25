import { JobSeekerProfile } from '../entities/jobSeekerProfile.entity';
import { AppDataSource } from '../config/typeorm';
import { Education } from '../entities/education.entity';

type Params = {
  userId: number,
  workStatus: boolean
}

export const saveJobSeekerProfile = async (jobSeekerParams: Params) => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    const jobSeekerProfile = jobSeekerProfileRepository.save(jobSeekerParams);

    return jobSeekerProfile;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const updateJobSeekerProfile = async (id: number, jobSeekerParams: JobSeekerProfile) => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    await jobSeekerProfileRepository.update(id, {
      ...(jobSeekerParams.completedSections && { completedSections: jobSeekerParams.completedSections }),
      ...(jobSeekerParams.currentLocation && { currentLocation: jobSeekerParams.currentLocation }),
      ...(jobSeekerParams.noticePeriod && { noticePeriod: jobSeekerParams.noticePeriod }),
      ...(jobSeekerParams.profilePicturePath && { profilePicture: jobSeekerParams.profilePicturePath }),
      ...(jobSeekerParams.resumePath && { resume: jobSeekerParams.resumePath }),
      ...(jobSeekerParams.profilePictureFile && { profilePicture: jobSeekerParams.profilePictureFile }),
      ...(jobSeekerParams.profilePictureFile && { resume: jobSeekerParams.profilePictureFile })
    });
    const jobSeekerProfile = await jobSeekerProfileRepository.findOneBy({ id });
    return jobSeekerProfile;
  } catch (error) {
    console.log('error', error);
    throw error;
  }

}

export const getJobSeekerProfile = async () => {
  try {
    const jobSeekerProfileRepository = AppDataSource.getRepository(JobSeekerProfile);
    const jobSeekerProfile = await jobSeekerProfileRepository.find();
    return jobSeekerProfile;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const saveEducation = async (educationParams: Education) => {
  console.log("educationParams-->", educationParams);

  try {
    const educationRepository = AppDataSource.getRepository(Education);
    const education = await educationRepository.save(educationParams);
    //delete user.hashedPassword
    console.log("education-->", education);

    return education;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const getEducation = async () => {

  try {
    const educationRepository = AppDataSource.getRepository(Education);
    const education = await educationRepository.find();
    //delete user.hashedPassword
    console.log("education-->", education);

    return education;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}