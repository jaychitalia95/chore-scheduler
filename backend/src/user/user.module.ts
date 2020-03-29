import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { User } from './user.entity'
import { AuthenticationService } from 'src/authentication/authentication.service';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]), AuthenticationModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
