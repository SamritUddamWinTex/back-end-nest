import { Model } from 'mongoose';
import { Task } from './entities/task.entity';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    create(taskDto: any): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Task> & Task & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, taskDto: any): Promise<Task>;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Task> & Task & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, Task> & Task & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, Task, "findOneAndDelete", {}>;
}
