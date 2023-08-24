import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity,PrimaryColumn } from 'typeorm';
import { NoticePeriod } from './noticePeriod.entity';
import { Location } from './location.entity';
import { Education } from './education.entity';
import { Industry } from './industry.entity';
import { KeySkills } from './keySkills.entity';
import { User } from './user.entity';

@Entity()
export class JobSeekerProfile extends BaseEntity {
  @PrimaryColumn()
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

  // @Column({ default: null })
  // currentLocation!: string

  @OneToOne(() => Location)
  @JoinColumn()
  currentLocation!: Location

  @OneToMany(() => Location, (location) => location.jobSeekerProfile,{createForeignKeyConstraints:true,cascade:true})
  preferredLocations!: Location[]

  @OneToMany(() => KeySkills, (keySkills) => keySkills.jobSeekerProfile,{createForeignKeyConstraints:true,cascade:true})
    keySkills!:KeySkills[]
  
  @OneToMany(() => Industry, (industry) => industry.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
    industries!:Industry[]

  @OneToOne(() => NoticePeriod)
  @JoinColumn()
  noticePeriod!: NoticePeriod

  @OneToMany(() => Education, (education) => education.jobSeekerProfile, { createForeignKeyConstraints: true, cascade: true })
  //@OneToMany(() => Education,(education)=>education.jobSeekerProfile)
  educations!: Education[]
  
  @OneToOne(() => User)
  @JoinColumn()
  user!:User

}
