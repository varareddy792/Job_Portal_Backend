import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import 'dotenv/config';
import { User } from '../entities/User';
import { Employment } from '../entities/Employment';
import { JobSeeker } from '../entities/JobSeeker';
import { TotalExpYear } from '../entities/TotalExpYear';
import TotalExpYearSeeder from '../entities/seed/TotalExpYear.seeder';
import { TotalExpMonth } from '../entities/TotalExpMonth';
import TotalExpMonthSeeder from '../entities/seed/TotalExpMonth.seeder';
import { Company } from '../entities/Company';
import CompanySeeder from '../entities/seed/Company.seeder';
import { JobTitle } from '../entities/JobTitle';
import JobTitleSeeder from '../entities/seed/JobTitle.seeder';
import { Currency } from '../entities/Currency';
import CurrencySeeder from '../entities/seed/Currency.seeder';
import { State } from '../entities/State';
import { City } from '../entities/City';
import StateSeeder from '../entities/seed/State.seeder';
import CitySeeder from '../entities/seed/City.seeder';
import { NoticePeriod } from '../entities/NoticePeriod';
import NoticePeriodSeeder from '../entities/seed/NoticePeriod.seeder';
import { AvailabilityToJoin } from '../entities/AvailabilityToJoin';
import AvailabilityToJoinSeeder from '../entities/seed/AvailabilityToJoin.seeder';
import { KeySkills } from '../entities/KeySkills';
import KeySkillsSeeder from '../entities/seed/KeySkills.seeder';
import { Industry } from '../entities/Industry';
import IndustrySeeder from '../entities/seed/Industry.seeder';
import { Department } from '../entities/Department';
import DepartmentSeeder from '../entities/seed/Department.seeder';
import { RoleCategory } from '../entities/RoleCategory';
import { JobRole } from '../entities/JobRole';
import RoleCategorySeeder from '../entities/seed/RoleCategory.seeder';
import JobRoleSeeder from '../entities/seed/JobRole.seeder';

if (process.env.DB_NAME === undefined) {
  throw new Error('Dbname cannot be undefined')
}
if (process.env.DB_USERNAME === undefined) {
  throw new Error('username cannot be undefined')
}
if (process.env.DB_PASSWORD === undefined) {
  throw new Error('password cannot be undefined')
}
if (process.env.DB_HOST === undefined) {
  throw new Error('db host cannot be undefined')
}
if (process.env.DB_POOL_MAX === undefined) {
  throw new Error('pool max cannot be undefined')
}
if (process.env.DB_POOL_MIN === undefined) {
  throw new Error('pool min Not be undefined')
}
if (process.env.DB_POOL_ACQUIRE === undefined) {
  throw new Error('Dbname Not be undefined')
}
if (process.env.DB_POOL_IDLE === undefined) {
  throw new Error('pool idle Not be undefined')
} if (process.env.DB_PORT === undefined) {
  throw new Error('pool idle Not be undefined')
}

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, JobSeeker, Employment, TotalExpYear, TotalExpMonth, Company, JobTitle, Currency, State, City, NoticePeriod, AvailabilityToJoin, KeySkills, Industry, Department, RoleCategory, JobRole],
  seeds: [TotalExpYearSeeder, TotalExpMonthSeeder, CompanySeeder, JobTitleSeeder, CurrencySeeder, StateSeeder, CitySeeder, NoticePeriodSeeder, AvailabilityToJoinSeeder, KeySkillsSeeder, IndustrySeeder, DepartmentSeeder, RoleCategorySeeder, JobRoleSeeder],
  subscribers: [],
  migrations: [],
}

export const AppDataSource = new DataSource(options);





