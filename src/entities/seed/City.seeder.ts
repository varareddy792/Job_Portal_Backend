import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { City } from '../City';
import { State } from '../State';

export default class CitySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(City);
    await repository.upsert([
      {
        title: 'Delhi',
        stateId: 1,
        status: true,
      },
      {
        title: 'Mumbai',
        stateId: 1,
        status: true,
      }
    ],
      ["id"]);

  }
}