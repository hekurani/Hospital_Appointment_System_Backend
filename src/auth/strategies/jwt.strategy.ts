import 'dotenv/config';
import { JwtPayload } from './../models/jwt-payload.model';
import { AuthService } from './../auth.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: authService.returnJwtExtractor(),
      ignoreExpiration: false,
      secretOrKey: '9byn0r12b691726b35912b634',
    });
  }

  async validate(jwtPayload: JwtPayload) {
    const user = await this.authService.validateUser(jwtPayload);
    return user;
  }
}
