import { User } from 'src/users/entity/user.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Discussion } from './discussion.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  sentAt: Date;

  @ManyToOne(() => Discussion, (discussion) => discussion.messages)
  discussion: Discussion;

  @ManyToOne(() => User)
  sender: User;
}
