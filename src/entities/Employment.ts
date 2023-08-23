import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { JobSeekerProfile } from './JobSeekerProfile';
import { User } from './User';
import { Company } from './Company';
import { City } from './City';
import { State } from './State';

@Entity()
export class Employment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ default: false })
  currentlyEmployed!: boolean

  @Column({ default: null })
  totalExperience!: string

  @OneToOne(() => Company)
  @JoinColumn()
  company!: Company

  @Column({ default: null })
  jobTitle!: string

  @Column({ default: null })
  outsideIndia!: boolean

  @OneToOne(() => City)
  @JoinColumn()
  currentCity!: City

  @OneToOne(() => State)
  @JoinColumn()
  currentState!: State

  @OneToOne(() => State)
  @JoinColumn()
  currentCountry!: State

  @Column({ default: null })
  workingStartDate!: string

  @Column({ default: null })
  workingEndDate!: string

  @Column({ default: null })
  annualSalaryCurrency!: string

  @Column({ default: null })
  annualSalaryAmount!: string

  @Column({ default: null })
  noticePeriod!: string

  @Column({ default: null })
  keySkills!: string

  @Column({ default: null })
  industry!: string

  @Column({ default: null })
  department!: string

  @Column({ default: null })
  roleCategory!: string

  @Column({ default: null })
  jobRole!: string

  @OneToOne(() => User)
  @JoinColumn()
  user!: User
}


