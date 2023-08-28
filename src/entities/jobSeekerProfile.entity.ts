import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { NoticePeriod } from './noticePeriod.entity';
import { Location } from './location.entity';
import { Education } from './education.entity';
import { Industry } from './industry.entity';
import { User } from './user.entity';

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
  @Column({ default: null })
  resumeHeadline!: string

  @OneToOne(() => Location)
  @JoinColumn()
  currentLocation!: Location

  @OneToMany(() => Location, (location) => location.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  preferredLocations!: Location[]

  //@OneToMany(() => KeySkills, (keySkills) => keySkills.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  @Column({ default: null })
  keySkills!: string

  @OneToMany(() => Industry, (industry) => industry.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  industries!: Industry[]

  @OneToOne(() => NoticePeriod)
  @JoinColumn()
  noticePeriod!: NoticePeriod

  @OneToMany(() => Education, (education) => education.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  //@OneToMany(() => Education,(education)=>education.jobSeekerProfile)
  educations!: Education[]

  @OneToOne(() => User)
  @JoinColumn()
  user!: User

}
