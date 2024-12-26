import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService,
  ) {}

  async create(userDto: any): Promise<User> {
    const newUser = await this.prismaService.user.create(userDto);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  findOne(uid: string) {
    return this.prismaService.user.findFirst({ where: { uid: uid } });
  }
  async update(uid: string, userDto: any): Promise<User> {
    return this.prismaService.user.update({
      where: { uid: uid },
      data: userDto,
    });
  }

  remove(uid: string) {
    return this.prismaService.user.delete({ where: { uid: uid } });
  }
}
