// import { Module } from '@nestjs/common';
// import { TasksController } from './tasks.controller';
// import { TasksService } from './tasks.service';

// @Module({
//   controllers: [TasksController],
//   providers: [TasksService],
// })
// export class TasksModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService], // ⚠️ important (Telegram use karega)
})
export class TasksModule {}