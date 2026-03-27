// import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { TasksService } from './tasks.service';

// @Controller('tasks')
// export class TasksController {
//   constructor(private readonly service: TasksService) {}

//   @Post()
//   create(@Body() body) {
//     return this.service.create(body);
//   }

//   @Get()
//   findAll() {
//     return this.service.findAll();
//   }

//   @Post(':id/complete')
//   complete(@Param('id') id: number) {
//     return this.service.markComplete(id);
//   }
// }
import { Controller, Get, Post, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post(':id/complete')
  completeTask(@Param('id') id: number) {
    return this.tasksService.completeTask(id);
  }
}