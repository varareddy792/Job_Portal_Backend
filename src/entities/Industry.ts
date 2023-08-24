import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { JobSeekerProfile } from './JobSeekerProfile';

@Entity()
export class Industry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

  @ManyToOne(() => JobSeekerProfile, (jobSeekerProfile) => jobSeekerProfile.industries,{onDelete:'CASCADE'})
  jobSeekerProfile!: JobSeekerProfile
}