import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './user.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async createUser(newUser: User) {
        if (!newUser.fullName || !newUser.email){
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
        } 
        else{
            await this.userRepository.save(newUser);
            return newUser.id
        }
    }

    async getAllUser() {
        return await this.userRepository.find()
    }
}
