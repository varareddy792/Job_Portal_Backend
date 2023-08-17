import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { JobSeekerProfile } from './JobSeekerProfile';
import { User } from './User';

@Entity()
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  jobSeekerId!: string;

  @ManyToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.educations)
  jobSeeker!: JobSeekerProfile

  @Column()
  highestQualification!: string

  @Column()
  course!: string

  @Column()
  specialization!: string

  @Column()
  universityInstitute!: string

  @Column()
  courseType!: string

  @Column()
  startingYear!: string

  @Column()
  passingYear!: string

  @Column()
  resumeHeadline!: string

  @Column()
  preferredWorkLocations!: string

  @Column()
  preferredSalaryCurrency!: string

  @Column()
  preferredSalaryAmount!: string

  @Column()
  gender!: string
}


