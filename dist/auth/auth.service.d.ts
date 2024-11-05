import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signup(username: string, password: string): Promise<{
        access_token: string;
        user: User;
    }>;
    private getJwtToken;
    refresh(refresh_token: string): Promise<{
        newAccessToken: string;
    }>;
    login(username: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, User> & User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    private generateToken;
}
