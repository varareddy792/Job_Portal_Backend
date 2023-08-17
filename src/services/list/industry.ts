import { AppDataSource } from "../../config/typeorm";
import { Company } from "../../entities/Company";
import { Industry } from "../../entities/Industry";

export const industryList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Industry)
      .createQueryBuilder("industry").select("industry")
      .where("industry.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
