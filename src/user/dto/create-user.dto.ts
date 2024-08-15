import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
  IsPhoneNumber,
  IsDateString,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({nullable: true})
  @IsEmail()
  email: string;

  @ApiProperty({nullable: true})
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({nullable: true})
  @IsString()
  fullName?: string;

  @ApiProperty({nullable: true})
  @IsNotEmpty()
  username: string

  @ApiProperty({nullable: true})
  @IsPhoneNumber('US')
  phone: string;

  @ApiProperty({nullable: true})
  currentLocation?: string

  @ApiProperty({nullable: true})
  salary?: bigint

  @ApiProperty({nullable: true})
  @IsOptional()
  avatar?: string;

  @ApiProperty({nullable: true})
  @IsOptional()
  emailVerificationToken?: string;

  @ApiProperty({nullable: true})
  @IsOptional()
  @IsDateString()
  emailVerificationTokenExpires?: string;

  @ApiProperty({nullable: true})
  @IsNotEmpty()
  joinDate?: Date

  @ApiProperty({nullable: true})
  @IsNotEmpty()
  endDate?: Date
}
