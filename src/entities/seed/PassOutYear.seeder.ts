import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { PassOutYear } from '../passOutYear.entity';

export default class PassoutYearSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(PassOutYear);
    await repository.upsert([
      {
        title: '1980',
        status: true,
      }, {
        title: '1981',
        status: true,
      }, {
        title: '1982',
        status: true,
      }, {
        title: '1983',
        status: true,
      }, {
        title: '1984',
        status: true,
      }, {
        title: '1985',
        status: true,
      }, {
        title: '1986',
        status: true,
      }, {
        title: '1987',
        status: true,
      }, {
        title: '1988',
        status: true,
      }, {
        title: '1989',
        status: true,
      }, {
        title: '1990',
        status: true,
      }, {
        title: '1991',
        status: true,
      }, {
        title: '1992',
        status: true,
      }, {
        title: '1993',
        status: true,
      }, {
        title: '1994',
        status: true,
      }, {
        title: '1995',
        status: true,
      }, {
        title: '1996',
        status: true,
      }, {
        title: '1997',
        status: true,
      }, {
        title: '1998',
        status: true,
      }, {
        title: '1999',
        status: true,
      }, {
        title: '2000',
        status: true,
      }, {
        title: '2001',
        status: true,
      }, {
        title: '2002',
        status: true,
      }, {
        title: '2003',
        status: true,
      }, {
        title: '2004',
        status: true,
      }, {
        title: '2005',
        status: true,
      }, {
        title: '2006',
        status: true,
      }, {
        title: '2007',
        status: true,
      }, {
        title: '2008',
        status: true,
      }, {
        title: '2009',
        status: true,
      }, {
        title: '2010',
        status: true,
      }, {
        title: '2011',
        status: true,
      }, {
        title: '2012',
        status: true,
      }, {
        title: '2013',
        status: true,
      }, {
        title: '2014',
        status: true,
      }, {
        title: '2015',
        status: true,
      }, {
        title: '2016',
        status: true,
      }, {
        title: '2017',
        status: true,
      }, {
        title: '2018',
        status: true,
      }, {
        title: '2019',
        status: true,
      }, {
        title: '2020',
        status: true,
      }, {
        title: '2021',
        status: true,
      }, {
        title: '2022',
        status: true,
      }, {
        title: '2023',
        status: true,
      }, {
        title: '2024',
        status: true,
      }, {
        title: '2025',
        status: true,
      }, {
        title: '2026',
        status: true,
      }, {
        title: '2027',
        status: true,
      }, {
        title: '2028',
        status: true,
      }, {
        title: '2029',
        status: true,
      }, {
        title: '2030',
        status: true,
      }, {
        title: '2031',
        status: true,
      }, {
        title: '2032',
        status: true,
      }, {
        title: '2033',
        status: true,
      }, {
        title: '2034',
        status: true,
      }, {
        title: '2035',
        status: true,
      }, {
        title: '2036',
        status: true,
      }, {
        title: '2037',
        status: true,
      }, {
        title: '2038',
        status: true,
      }, {
        title: '2039',
        status: true,
      }, {
        title: '2040',
        status: true,
      }, {
        title: '2041',
        status: true,
      }, {
        title: '2042',
        status: true,
      }, {
        title: '2043',
        status: true,
      }, {
        title: '2044',
        status: true,
      }, {
        title: '2045',
        status: true,
      }, {
        title: '2046',
        status: true,
      }, {
        title: '2047',
        status: true,
      }, {
        title: '2048',
        status: true,
      }, {
        title: '2049',
        status: true,
      }
    ],
      ["id"]);

  }
}