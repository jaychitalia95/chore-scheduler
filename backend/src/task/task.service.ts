import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CronJob } from "cron";
import { MailerService } from 'src/mailer/mailer.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>,
                @InjectRepository(User) private readonly userRepository: Repository<User>,
                private readonly mailService: MailerService) {}

    async createTask(task: Task) {
        const user: User[] = await this.userRepository.find()
        console.log(user)
        let currentUser = 0;
        let response = await this.taskRepository.save(task)
        console.log('Task '+task.currentUser)
        new CronJob(task.frequency, async () => {
            // email will be sent through here.
            console.log(user[task.currentUser])
            this.mailService.sendMail(user[task.currentUser], task)
            // increment++
            task.currentUser++
            console.log(task.currentUser)
            if(task.currentUser == user.length)
                task.currentUser = 0
            await this.taskRepository.save(task)
        }).start();
        return response
    }
}
