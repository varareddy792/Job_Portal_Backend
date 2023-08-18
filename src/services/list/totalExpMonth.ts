import { AppDataSource } from "../../config/typeorm";
import { Company } from "../../entities/Company";
import { TotalExpMonth } from "../../entities/TotalExpMonth";

export const totalExpMonthList = async () => {
  try {
    const queryResult = AppDataSource.getRepository(TotalExpMonth)
      .createQueryBuilder("totalExpMonth").select("totalExpMonth")
      .where("totalExpMonth.status = :status", { status: 1 })
      .getMany();
    return queryResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
