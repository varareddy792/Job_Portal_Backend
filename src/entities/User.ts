import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({nullable:false})
  email!: string

  @Column({default:null})
  accountType!: string
  
  @Column({default:null})
  accountId!: string

  @Column()
  mobileNumber!: string

  @Column({default:null})
  hashedPassword?: string

  @Column({default:false})
  isEmailVerified!: boolean
  
  @Column({default:false})
  isMobileVerified!: boolean
  
  @Column()
  resumePath!: string
  
  @Column({default:false})
  isExperienced!: boolean
  
  
}
