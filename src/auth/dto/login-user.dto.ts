import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @ApiProperty({
      type: String,
      example: 'uddam',
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        type: String,
        example: 'Admin123',
      })
    @IsString()
    @IsNotEmpty()
    password: string;
}
