import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: any): Promise<import("./entities/task.entity").Task>;
    findAll(): Promise<import("./entities/task.entity").Task[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/task.entity").Task> & import("./entities/task.entity").Task & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateTaskDto: any): Promise<import("./entities/task.entity").Task>;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/task.entity").Task> & import("./entities/task.entity").Task & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, import("./entities/task.entity").Task> & import("./entities/task.entity").Task & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./entities/task.entity").Task, "findOneAndDelete", {}>;
}
