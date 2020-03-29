import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
    providers: [AuthenticationService],
    exports: [AuthenticationService],
    imports: [TypeOrmModule.forFeature([User])]
})
export class AuthenticationModule {}
