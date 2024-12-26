import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { User } from '@prisma/client';

@Injectable()

export class AuthService {

  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(createAuthDto: CreateAuthDto) {
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);
    const newUser =await this.prismaService.user.create(
      {
         data: { 
          name: createAuthDto.name,
          email: createAuthDto.email,
          username: createAuthDto.username,
          password: hashedPassword.toString()
        } 
      },
    );

    return this.generateToken(newUser);
  }

  private getJwtToken(userId: string, secret: string, expiresIn: string) {
    return this.jwtService.sign({ userId }, { secret, expiresIn });
  }

  async refresh(refreshTokenDto: RefreshTokenDto) {
    const payload = this.jwtService.verify(refreshTokenDto.refresh_token, {
      secret: process.env.REFRESH_SECRET,
    });
    const newAccessToken = this.getJwtToken(
      payload.userId,
      process.env.JWT_SECRET,
      process.env.JWT_EXPIRATION_TIME,
    );

    return {
      newAccessToken,
    };
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.prismaService.user.findUnique({ where: { username: loginUserDto.username } });
    if (!user || !(await bcrypt.compare(loginUserDto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.getJwtToken(
      user.uid,
      process.env.JWT_SECRET,
      process.env.JWT_EXPIRATION_TIME,
    );
    const refreshToken = this.getJwtToken(
      user.uid,
      process.env.REFRESH_SECRET,
      process.env.REFRESH_EXPIRATION_TIME,
    );

    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  private generateToken(user: User) {
    const payload = { username: user.username, sub: user.uid };
    return { access_token: this.jwtService.sign(payload) };
  }
}
