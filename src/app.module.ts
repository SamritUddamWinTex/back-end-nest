import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';



@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule, 
    TaskModule
  ],
  exports: [ AuthModule],
  providers: [ PrismaService]
})
export class AppModule {}
