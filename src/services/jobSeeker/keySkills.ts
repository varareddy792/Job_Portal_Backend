import { AppDataSource } from "../../config/typeorm";
import { Employment } from "../../entities/Employment";

export const keySkills = async ({ posts }: any) => {
  const { keySkills, userId } = posts;

  try {
    if (keySkills) {
      AppDataSource.getRepository(Employment).createQueryBuilder("employment")
        .update<Employment>(Employment, { keySkills: keySkills })
        .where("userId = :id", { id: userId })
        .execute()
    }
    const queryResult = AppDataSource.getRepository(Employment)
      .createQueryBuilder("employment").select("employment")
      .where("employment.userId = :userId", { userId: userId })
      .getMany();
    return queryResult;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
export const keySkillsGet = async ({ id }: any) => {
  try {
    const queryResult = AppDataSource.getRepository(Employment)
      .createQueryBuilder("employment").select("employment")
      .where("employment.userId = :userId", { userId: id })
      .getMany();
    return queryResult;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

