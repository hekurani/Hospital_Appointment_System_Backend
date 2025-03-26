import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Role } from '@prisma/client';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

    @Post('signup')
    async signup(@Body() body: { email: string, password: string, name: string }){
        return this.usersService.createUser(body.email,body.password,body.name,Role.PATIENT);
    }

    @Post('login')
    async login(@Body() body: {email: string, password: string}){
        const user = await this.authService.validateUser(body.email,body.password);
        return this.authService.login(user);
    }

    @Post('protected')
    @UseGuards(JwtAuthGuard)
    async protected(@Request() req){
        return req.user;
    }
}
