import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaClient } from '@prisma/client';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
                
  controllers: [
    UsersController
  ],    
  providers: [
    UsersService,
    PrismaService
  ],    
  exports: [
    UsersService
  ],   
  imports: [PrismaModule],            
})
export class UsersModule {}
