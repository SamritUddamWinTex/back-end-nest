import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('refresh')
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refresh(refreshTokenDto);
  }

  @Post('signup')
  async signup(
    @Body() createAuthDto: CreateAuthDto,
  ) {
    return this.authService.signup(createAuthDto);
  }

  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto,
  ) {
    return this.authService.login(loginUserDto);
  }
}
