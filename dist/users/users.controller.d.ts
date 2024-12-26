import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        uid: string;
        email: string;
        username: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<{
        name: string;
        uid: string;
        email: string;
        username: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(uid: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        uid: string;
        email: string;
        username: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(uid: string, updateUserDto: UpdateUserDto): Promise<{
        name: string;
        uid: string;
        email: string;
        username: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(uid: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        uid: string;
        email: string;
        username: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
