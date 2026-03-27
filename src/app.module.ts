// import { Module } from '@nestjs/common';
// import { TasksModule } from './tasks/tasks.module';
// import { TelegramModule } from './telegram/telegram.module';

// @Module({
//   imports: [TasksModule, TelegramModule],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password@123', // 
      database: 'voice_tasks',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ dev only
    }),
    TasksModule,
    TelegramModule,
  ],
})
export class AppModule {}