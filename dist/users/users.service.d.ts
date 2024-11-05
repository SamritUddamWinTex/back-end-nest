import { Model } from 'mongoose';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(userDto: any): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, userDto: any): Promise<User>;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, User, "findOneAndDelete", {}>;
}
