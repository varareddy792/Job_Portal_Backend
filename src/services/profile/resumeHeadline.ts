import { AppDataSource } from "../../config/typeorm";
import { JobSeekerProfile } from "../../entities/JobSeekerProfile";

export const resumeHeadline = async (id: string, { posts }: any) => {
  const { resumeHeadline, userId } = posts;
  try {
    if (!id) {
      const queryResult = AppDataSource.getRepository(JobSeekerProfile).createQueryBuilder("jobSeekerProfile")
        .update<JobSeekerProfile>(JobSeekerProfile, { resumeHeadline: resumeHeadline })
        .where("userId = :id", { id: userId })
        .execute()
      return queryResult;
    } else {
      const queryResult = AppDataSource.getRepository(JobSeekerProfile)
        .createQueryBuilder("JobSeekerProfile").select("JobSeekerProfile")
        .where("JobSeekerProfile.userId = :userId", { userId: id })
        .getMany();
      return queryResult;
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
