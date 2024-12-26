import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({
      type: String,
      example: 'uddam',
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        type: String,
        example: 'samrituddam20@gmail.com',
      })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: String,
        example: 'Admin123',
      })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        type: String,
        example: 'Uddam Samrit',
      })
    @IsString()
    @IsNotEmpty()
    name: string;
}
