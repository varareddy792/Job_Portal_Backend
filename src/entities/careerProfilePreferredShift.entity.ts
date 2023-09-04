import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { CareerProfile } from './careerProfile.entity';
import { PreferredShift } from './preferredShift.entity';

@Entity()
export class CareerProfilePreferredShift extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => CareerProfile, (careerProfile) => careerProfile.careerProfileEmployeeType)
  careerProfile!: CareerProfile

  @OneToOne(() => PreferredShift)
  @JoinColumn({ name: "preferredShiftId" })
  preferredShift!: PreferredShift

}