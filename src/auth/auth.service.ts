import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

    async validateUser(email: string, password: string){
        const user = await this.usersService.findUserByEmail(email);
        if (user && (await bcrypt.compare(password,user.password))){
            return user;
        }
        throw new UnauthorizedException('Invalid credentials');
    }

    async login(user:any){
        const payload = { email: user.email, role: user.role, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
