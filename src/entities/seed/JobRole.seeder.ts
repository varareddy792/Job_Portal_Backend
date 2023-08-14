import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JobRole } from '../JobRole';

export default class JobRoleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JobRole);
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