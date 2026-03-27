// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class TasksService {
//   private tasks = [];

//   create(data) {
//     const task = { id: Date.now(), ...data, status: 'pending' };
//     this.tasks.push(task);
//     return task;
//   }

//   findAll() {
//     return this.tasks;
//   }

//   markComplete(id: number) {
//     const task = this.tasks.find(t => t.id == id);
//     if (task) task.status = 'completed';
//     return task;
//   }
// }


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  async createTask(title: string, chatId: number) {
    const dueTime = new Date(Date.now() + 60 * 60 * 1000);

    const task = this.taskRepo.create({
      title,
      due_time: dueTime,
      chat_id: chatId,
    });

    return this.taskRepo.save(task);
  }

  async getTasks() {
    return this.taskRepo.find();
  }

  async completeTask(id: number) {
    const task = await this.taskRepo.findOne({ where: { id } });

    if (!task) return null;

    task.status = 'completed';
    return this.taskRepo.save(task);
  }
}
