import { Module, Controller, Inject, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { MailerService } from 'src/mailer/mailer.service';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { AppModule } from 'src/app.module';
import { User } from 'src/user/user.entity';
import { MailerModule } from 'src/mailer/mailer.module';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
    imports: [TypeOrmModule.forFeature([Task, User]), MailerModule, AuthenticationModule],
    providers: [TaskService],
    controllers: [TaskController]
})
export class TaskModule {}
