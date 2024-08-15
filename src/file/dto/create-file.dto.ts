import { IsString, IsOptional, IsUUID, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFileDto {
  @ApiProperty({ description: 'Name of the file' })
  @IsString()
  filename: string;

  @ApiProperty({ description: 'path to file' })
  @IsString()
  path: string;

  @ApiProperty({ description: 'files related to trailer and load', required: false })
  @IsUUID()
  belongsTo: string;
}
