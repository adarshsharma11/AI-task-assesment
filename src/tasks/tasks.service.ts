import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  create(data) {
    const task = { id: Date.now(), ...data, status: 'pending' };
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  markComplete(id: number) {
    const task = this.tasks.find(t => t.id == id);
    if (task) task.status = 'completed';
    return task;
  }
}
