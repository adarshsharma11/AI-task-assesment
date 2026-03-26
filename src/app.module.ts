import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [TasksModule, TelegramModule],
})
export class AppModule {}
