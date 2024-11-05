import { Schema, Document } from 'mongoose';
export declare const TaskSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    title?: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    title?: string;
}>> & import("mongoose").FlatRecord<{
    title?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface Task extends Document {
    title: string;
}
