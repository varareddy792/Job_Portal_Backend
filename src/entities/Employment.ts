import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { JobSeeker } from './JobSeeker';

@Entity()
export class Employment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  jobSeekerId!: string;

  @ManyToOne(type => JobSeeker, jobSeeker => jobSeeker.id) jobSeeker!: JobSeeker;

  @Column()
  currentlyEmployed!: boolean

  @Column()
  totalExperience!: string

  @Column()
  company!: string

  @Column()
  jobTitle!: string

  @Column()
  outsideIndia!: boolean

  @Column()
  currentCity!: string

  @Column()
  currentState!: string

  @Column()
  currentCountry!: string

  @Column()
  workingStartDate!: string

  @Column()
  workingEndDate!: string

  @Column()
  annualSalaryCurrency!: string

  @Column()
  annualSalaryAmount!: string

  @Column()
  noticePeriod!: string

  @Column()
  keySkills!: string

  @Column()
  industry!: string

  @Column()
  department!: string

  @Column()
  roleCategory!: string

  @Column()
  jobRole!: string
}


