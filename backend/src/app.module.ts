import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'apt3d',
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    TaskModule,
    AuthenticationModule,
    MailerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
