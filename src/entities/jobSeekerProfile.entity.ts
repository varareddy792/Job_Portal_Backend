import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { NoticePeriod } from './noticePeriod.entity';
import { Location } from './location.entity';
import { Education } from './education.entity';
import { Industry } from './industry.entity';
import { User } from './user.entity';
import { Department } from './department.entity';
import { RoleCategory } from './roleCategory.entity';
import { JobRole } from './jobRole.entity';
import { Currency } from './currency.entity';

@Entity()
export class JobSeekerProfile extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number

  @Column({ default: null })
  workStatus!: boolean

  @Column({ default: null })
  resume!: string

  @Column({ default: null })
  profilePicture!: string

  @Column({ default: null })
  noOfSections!: number

  @Column({ default: null })
  completedSections!: number

  @Column({ default: null, type: 'text' })
  profileSummary!: string

  // @Column({ default: null })
  // currentLocation!: string
  @Column({ default: null, type: 'text' })
  resumeHeadline!: string

  @OneToOne(() => Location)
  @JoinColumn()
  currentLocation!: Location

  @OneToMany(() => Location, (location) => location.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  preferredLocations!: Location[]

  //@OneToMany(() => KeySkills, (keySkills) => keySkills.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  @Column({ default: null })
  keySkills!: string

  @OneToOne(() => Industry)
  @JoinColumn()
  industries!: Industry

  @OneToOne(() => Department)
  @JoinColumn()
  department!: Department

  @OneToOne(() => NoticePeriod)
  @JoinColumn()
  noticePeriod!: NoticePeriod

  @OneToOne(() => RoleCategory)
  @JoinColumn()
  roleCategory!: RoleCategory

  @OneToOne(() => JobRole)
  @JoinColumn()
  jobRole!: JobRole

  @Column({ default: null })
  jobType!: string

  @Column({ default: null })
  employmentType!: string

  @Column({ default: null })
  preferredShift!: string

  @OneToOne(() => Currency)
  @JoinColumn()
  currency!: Currency

  @Column({ default: null })
  expectedSalary!: string

  @OneToMany(() => Education, (education) => education.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  //@OneToMany(() => Education,(education)=>education.jobSeekerProfile)
  educations!: Education[]

  @OneToOne(() => User)
  @JoinColumn()
  user!: User

}
