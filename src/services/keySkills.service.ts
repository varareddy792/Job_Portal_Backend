import { AppDataSource } from "../config/typeorm";
import { Employment } from "../entities/employment.entity";
import { KeySkills } from "../entities/keySkills.entity";

export const keySkillsList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(KeySkills)
      .createQueryBuilder("keySkills").select("keySkills")
      .where("keySkills.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

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

