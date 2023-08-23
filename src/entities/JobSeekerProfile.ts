import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, BaseEntity } from 'typeorm';
import { NoticePeriod } from './NoticePeriod';
import { Location } from './Location';
import { Education } from './Education';
import { Industry } from './Industry';
import { KeySkills } from './KeySkills';
import { User } from './User';

@Entity()
export class JobSeekerProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ default: false })
  workStatus!: boolean

  @Column({ default: null })
  resume!: string

  @Column({ default: null })
  profilePicture!: string

  @Column({ default: null })
  noOfSections!: number

  @Column({ default: null })
  completedSections!: number

  @Column({ default: null })
  resumeHeadline!: string

  @OneToOne(() => Location)
  @JoinColumn()
  currentLocation!: Location

  @OneToMany(() => Location, (location) => location.jobSeekerProfile)
  preferredLocations!: Location[]

  @OneToMany(() => KeySkills, (keySkills) => keySkills.jobSeekerProfile)
  keySkills!: KeySkills[]

  @OneToMany(() => Industry, (industry) => industry.jobSeekerProfile)
  industries!: Industry[]

  @OneToOne(() => NoticePeriod)
  @JoinColumn()
  noticePeriod!: NoticePeriod

  @OneToMany(() => Education, (education) => education.jobSeeker)
  educations!: Education[]

  @OneToOne(() => User)
  @JoinColumn()
  user!: User

}
