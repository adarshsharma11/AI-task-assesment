import { Module } from '@nestjs/common';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';
import { TasksModule } from '../tasks/tasks.module'; // 👈 ADD

@Module({
  imports: [TasksModule], // 👈 IMPORTANT
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class TelegramModule {}