import { AppDataSource } from "../../config/typeorm";
import { Employment } from "../../entities/Employment";

export const keySkills = async (id: string, { posts }: any) => {
  const { keySkills, userId } = posts;

  try {
    if (!id) {

      const queryResult = AppDataSource.getRepository(Employment).createQueryBuilder("employment")
        .update<Employment>(Employment, { keySkills: keySkills })
        .where("userId = :id", { id: userId })
        .execute()
      return queryResult;
    } else {
      const queryResult = AppDataSource.getRepository(Employment)
        .createQueryBuilder("employment").select("employment")
        .where("employment.userId = :userId", { userId: 1 })
        .getMany();
      return queryResult;
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const keySkillsDataSet = async (id: string) => {

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
