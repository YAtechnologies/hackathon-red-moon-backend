import { Request } from 'src/services/entity/request.entity';
import { Service } from 'src/services/entity/service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 'client' })
  type: string;

  @OneToMany(() => Service, (service) => service.owner)
  services: Service[];

  @OneToMany(() => Request, (request) => request.sender)
  sentRequests: Request[];
}
