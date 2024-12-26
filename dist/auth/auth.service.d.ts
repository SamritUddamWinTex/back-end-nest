import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    signup(createAuthDto: CreateAuthDto): Promise<{
        access_token: string;
    }>;
    private getJwtToken;
    refresh(refreshTokenDto: RefreshTokenDto): Promise<{
        newAccessToken: string;
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
    private generateToken;
}
