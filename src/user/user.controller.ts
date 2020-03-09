import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service'
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService) {}
    @Get()
    currentTime(): string {
        const today = new Date();
        const time = `${today.getHours()} : ${today.getMinutes()}`
        return 'The current time is '+time
    }
    @Post()
    addUser(@Body() user: User) {
        const id = this.userService.createUser(user)
        return id
    }
}