import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { Role } from "@prisma/client";

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService){}

    async createUser(email: string, password: string, name: string, role: Role){
        return this.prisma.user.create({
            data: { email, password, name, role },
        });
    }

    async findUserByEmail(email: string){
        return this.prisma.user.findUnique({where: {email}});
    }

}