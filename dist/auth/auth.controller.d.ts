import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    refreshToken(refreshTokenDto: RefreshTokenDto): Promise<{
        newAccessToken: string;
    }>;
    signup(createAuthDto: CreateAuthDto): Promise<{
        access_token: string;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            name: string;
            uid: string;
            email: string;
            username: string;
            password: string;
            created_at: Date;
            updated_at: Date;
        };
    }>;
}
