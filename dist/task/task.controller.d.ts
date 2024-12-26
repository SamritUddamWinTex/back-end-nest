import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<{
        uid: string;
        title: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<{
        uid: string;
        title: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        uid: string;
        title: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
        uid: string;
        title: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        uid: string;
        title: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
