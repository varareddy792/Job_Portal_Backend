import { AppDataSource } from "../../config/typeorm";
import { JobSeekerProfile } from "../../entities/JobSeekerProfile";

export const resumeHeadline = async ({ posts }: any) => {

  const { resumeHeadline, userId } = posts;
  try {
    if (resumeHeadline) {
      AppDataSource.getRepository(JobSeekerProfile).createQueryBuilder("jobSeekerProfile")
        .update<JobSeekerProfile>(JobSeekerProfile, { resumeHeadline: resumeHeadline })
        .where("userId = :id", { id: userId })
        .execute();
    }
    const queryResult = AppDataSource.getRepository(JobSeekerProfile)
      .createQueryBuilder("JobSeekerProfile").select("JobSeekerProfile")
      .where("JobSeekerProfile.userId = :userId", { userId: userId })
      .getMany();
    return queryResult;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
