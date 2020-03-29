import { Controller, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
    
    @Post()
    createTask(@Body() task: Task) {
        return this.taskService.createTask(task)
    }
}
