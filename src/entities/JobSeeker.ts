import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class JobSeeker extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  fullName!: string

  @Column()
  emailId!: string

  @Column()
  password!: string

  @Column()
  mobileNumber!: string

  @Column()
  workStatus!: string

  @Column()
  resume!: string

  @Column()
  sendNewsletter!: string

  @Column()
  otpVerificationCode!: string
  employments: any;
  jobSeekerId: any;

}
