import { AppDataSource } from "../config/typeorm";
import { Company } from "../entities/company.entity";

export const companyList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(Company)
      .createQueryBuilder("company").select("company")
      .where("company.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
