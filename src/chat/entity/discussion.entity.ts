import { Request } from 'src/services/entity/request.entity';
import { Service } from 'src/services/entity/service.entity';
import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class Discussion {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Request)
  request: Request;

  @OneToMany(() => Message, (message) => message.discussion)
  messages: Message[];
}
