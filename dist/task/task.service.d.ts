import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(uid: string): Promise<{
        uid: string;
        title: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(uid: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(uid: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        uid: string;
        title: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
