import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    refreshToken(refresh_token: string): Promise<{
        newAccessToken: string;
    }>;
    signup(username: string, password: string): Promise<{
        access_token: string;
        user: import("../users/entities/user.entity").User;
    }>;
    login(username: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, import("../users/entities/user.entity").User> & import("../users/entities/user.entity").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
}
