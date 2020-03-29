import { Controller, Get, Post, Body, Res, Query } from '@nestjs/common';
import { UserService } from './user.service'
import { User } from './user.entity';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService,
                private readonly authService: AuthenticationService) {}
    @Get()
    getUser() {
        return this.userService.getAllUser()
    }
    @Post()
    addUser(@Body() user: User) {
        return this.userService.createUser(user)
    }
    @Get('login')
    login(@Query('token') token: string, @Query('currentUser') currentUser: string) {
        // console.log(token, currentUser)
        return this.authService.verifyToken(token, currentUser)
    }
}