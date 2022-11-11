import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entity/message.entity';
import { Discussion } from './entity/discussion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Discussion])],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
