import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { State } from '../state.entity';

export default class StateSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(State);
    await repository.upsert([
      {
        title: 'Andhra Pradesh',
        status: true,
      },
      {
        title: 'Arunachal Pradesh',
        status: true,
      },
      {
        title: 'Assam',
        status: true,
      },
      {
        title: 'Bihar',
        status: true,
      },
      {
        title: 'Chhattisgarh',
        status: true,
      },
      {
        title: 'Goa',
        status: true,
      },
      {
        title: 'Gujarat',
        status: true,
      },
      {
        title: 'Haryana',
        status: true,
      },
      {
        title: 'Himachal Pradesh',
        status: true,
      },
      {
        title: 'Jharkhand',
        status: true,
      },
      {
        title: 'Karnataka',
        status: true,
      },
      {
        title: 'Kerala',
        status: true,
      },
      {
        title: 'Madhya Pradesh',
        status: true,
      },
      {
        title: 'Maharashtra',
        status: true,
      },
      {
        title: 'Manipur',
        status: true,
      },
      {
        title: 'Meghalaya',
        status: true,
      },
      {
        title: 'Mizoram',
        status: true,
      },
      {
        title: 'Nagaland',
        status: true,
      },
      {
        title: 'Odisha',
        status: true,
      },
      {
        title: 'Punjab',
        status: true,
      },
      {
        title: 'Rajasthan',
        status: true,
      },
      {
        title: 'Sikkim',
        status: true,
      },
      {
        title: 'Tamil Nadu',
        status: true,
      },
      {
        title: 'Telangana',
        status: true,
      },
      {
        title: 'Tripura',
        status: true,
      },
      {
        title: 'Uttarakhand',
        status: true,
      },
      {
        title: 'Uttar Pradesh',
        status: true,
      },
      {
        title: 'West Bengal',
        status: true,
      },
      {
        title: 'Ladakh',
        status: true,
      },
      {
        title: 'Jammu and Kashmir',
        status: true,
      },
      {
        title: 'Puducherry',
        status: true,
      },
      {
        title: 'Lakshadweep',
        status: true,
      },
      {
        title: 'Andaman and Nicobar Islands',
        status: true,
      },
      {
        title: 'Dadra and Nagar Haveli and Daman and Diu',
        status: true,
      },
      {
        title: 'Chandigarh',
        status: true,
      },
      {
        title: 'The Government of NCT of Delhi',
        status: true,
      }


    ],
      ["id"]);

  }
}