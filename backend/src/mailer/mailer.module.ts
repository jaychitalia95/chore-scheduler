import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
    providers: [MailerService, AuthenticationService],
    exports: [MailerService],
    imports: [TypeOrmModule.forFeature([User])]
})
export class MailerModule {}
