import { AppDataSource } from "../config/typeorm";
import { Company } from "../entities/company.entity";
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
