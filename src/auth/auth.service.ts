import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByName(username);
    if (user && !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    } else if (user) {
      const payload = {
        username: user.username,
        email: user.email,
        sub: user.id,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    throw new UnauthorizedException();
  }
}
