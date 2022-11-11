import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entity/request.entity';
import { Service } from './entity/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, Request])],
})
export class ServicesModule {}
