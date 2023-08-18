import { AppDataSource } from "../../config/typeorm";
import { Company } from "../../entities/Company";
import { HighestQualification } from "../../entities/HighestQualification";

export const highestQualificationList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(HighestQualification)
      .createQueryBuilder("highestQualification").select("highestQualification")
      .where("highestQualification.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
