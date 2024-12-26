import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || "9693ebac8b30c2e796bc9324da8c3797588c53a8e4eadce2c872feee02b82e1a", 
      signOptions: { expiresIn: '60m' },
    }),
    ConfigModule,
    JwtModule,
    PrismaModule
    
  ],
  providers: [AuthService, JwtService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
