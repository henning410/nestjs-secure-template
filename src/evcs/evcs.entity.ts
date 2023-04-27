import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Evcs {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'evcs_id',
  })
  id: number;

  @Column({
    nullable: false,
    type: 'double precision',
  })
  longitude: number;

  @Column({
    nullable: false,
    type: 'double precision',
  })
  latitude: number;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @Column({
    nullable: false,
    type: 'double precision',
  })
  price: number;

  @Column({
    nullable: true,
    default: true,
    name: 'is_available',
  })
  isAvailable: boolean;

  @ManyToOne(() => User, (user) => user.evcs)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
