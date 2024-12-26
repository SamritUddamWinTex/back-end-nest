import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RefreshTokenDto {
    @ApiProperty({
        type: String,
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzg5NGJkZC04NzY3LTQxNzgtYmZmZC03YjRiZjE2MDAxMGIiLCJpYXQiOjE3MzUxOTU4MjEsImV4cCI6MTczNTgwMDYyMX0.DkPJZ0mFwbiciUu2HyFf6UtLz2JjfZ6ZqcPR8nD4-lc',
      })
    @IsString()
    @IsNotEmpty()
    refresh_token: string;
}
