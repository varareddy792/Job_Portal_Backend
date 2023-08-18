import { AppDataSource } from "../../config/typeorm";
import { Company } from "../../entities/Company";
import { Specialization } from "../../entities/Specialization";

export const specializationList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Specialization)
      .createQueryBuilder("specialization").select("specialization")
      .where("specialization.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
