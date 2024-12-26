import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = this.prismaService.task.create({
      data: {
        title: createTaskDto.title,
        user: {
          connect: {
            uid: createTaskDto.user_id
          }
        }
      }
    });
    return newTask;
  }

  async findAll(): Promise<Task[]> {
    return await this.prismaService.task.findMany();
  }

  async findOne(uid: string) {
    return await this.prismaService.task.findFirst({where: { uid}});
  }

  async update(uid: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.prismaService.task.update({
      where: {
        uid
      },
      data: {
        title: updateTaskDto.title,
        user: {
          connect: {
            uid: updateTaskDto.user_id
          }
        }
      }
    });
  }

  remove(uid: string) {
    return this.prismaService.task.delete({where: {uid}});
  }
}
