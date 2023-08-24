import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { RoleCategory } from '../roleCategory.entity';

export default class RoleCategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(RoleCategory);
    await repository.upsert([
      {
        title: '15 Days or less',
        status: true,
      },
      {
        title: '1 Month',
        status: true,
      },
      {
        title: '2 Months',
        status: true,
      },
      {
        title: '3 Months',
        status: true,
      },
      {
        title: 'More than 3 Months',
        status: true,
      },
      {
        title: 'Serving Notice Period',
        status: true,
      }
    ],
      ["id"]);

  }
}