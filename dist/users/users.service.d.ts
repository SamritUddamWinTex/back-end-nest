import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(userDto: any): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(uid: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        uid: string;
        name: string;
        email: string;
        username: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(uid: string, userDto: any): Promise<User>;
    remove(uid: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        uid: string;
        name: string;
        email: string;
        username: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
