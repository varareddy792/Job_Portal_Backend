import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { JobSeekerProfile } from './JobSeekerProfile';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({ nullable: false })
  email!: string

  @Column({ default: null })
  accountType!: string

  @Column({ default: null })
  accountId!: string

  @Column({ default: null })
  mobileNumber!: string

  @Column({ default: null })
  hashedPassword?: string

  @Column({ default: null })
  userType!: string

  @OneToOne(() => JobSeekerProfile)
  @JoinColumn()
  jobSeekerProfile!: JobSeekerProfile
  // @Column({default:false})
  // isEmailVerified!: boolean

  // @Column({default:false})
  // isMobileVerified!: boolean

}
