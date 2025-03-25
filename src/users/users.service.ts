import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository){}

    async createUser(email: string, password: string, name: string, role: Role = Role.PATIENT){
        const hashedPassword = await bcrypt.hash(password,10);
        return this.usersRepository.createUser(email, hashedPassword, name, role);
    }

    async findUserByEmail(email: string){
        return this.usersRepository.findUserByEmail(email);
    }
}
