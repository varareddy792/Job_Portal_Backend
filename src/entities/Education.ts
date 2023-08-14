import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { JobSeeker } from './JobSeeker';

@Entity()
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  jobSeekerId!: string;

  @ManyToOne(type => JobSeeker, jobSeeker => jobSeeker.id) jobSeeker!: JobSeeker;

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


