import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { State } from './state.entity';

@Entity()
export class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  stateId!: number;
  @ManyToOne(type => State, state => state.id) state!: State;

  @Column({ unique: true })
  title!: string;

  @Column()
  status!: boolean

}