import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthenticationService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    generateToken(email: string) {
        return sign({email: email}, 'we all are useless', {algorithm: 'HS256', expiresIn: "12h"})
    }

    async verifyToken(token: string, currentUser: string){
        const user: User[] = await this.userRepository.find()
        const decoded = verify(token, 'we all are useless', {algorithms: ['HS256']})
        if((<any>decoded).email == user[currentUser].email) 
            return true
        else
            return false
    }
    
}
