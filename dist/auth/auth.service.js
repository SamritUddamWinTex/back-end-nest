"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async signup(createAuthDto) {
        const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);
        const newUser = await this.prismaService.user.create({
            data: {
                name: createAuthDto.name,
                email: createAuthDto.email,
                username: createAuthDto.username,
                password: hashedPassword.toString()
            }
        });
        return this.generateToken(newUser);
    }
    getJwtToken(userId, secret, expiresIn) {
        return this.jwtService.sign({ userId }, { secret, expiresIn });
    }
    async refresh(refreshTokenDto) {
        const payload = this.jwtService.verify(refreshTokenDto.refresh_token, {
            secret: process.env.REFRESH_SECRET,
        });
        const newAccessToken = this.getJwtToken(payload.userId, process.env.JWT_SECRET, process.env.JWT_EXPIRATION_TIME);
        return {
            newAccessToken,
        };
    }
    async login(loginUserDto) {
        const user = await this.prismaService.user.findUnique({ where: { username: loginUserDto.username } });
        if (!user || !(await bcrypt.compare(loginUserDto.password, user.password))) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const accessToken = this.getJwtToken(user.uid, process.env.JWT_SECRET, process.env.JWT_EXPIRATION_TIME);
        const refreshToken = this.getJwtToken(user.uid, process.env.REFRESH_SECRET, process.env.REFRESH_EXPIRATION_TIME);
        return {
            accessToken,
            refreshToken,
            user,
        };
    }
    generateToken(user) {
        const payload = { username: user.username, sub: user.uid };
        return { access_token: this.jwtService.sign(payload) };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map