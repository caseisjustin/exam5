import {
  IsUUID,
  IsJSON,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrailerDto {
  @IsUUID()
  @ApiProperty()
  trailerNum: string;

  @ApiProperty()
  @IsUUID()
  currentLocation: string;

  @ApiProperty({description: "owned by company or a driver it self"})
  @IsJSON()
  owner: string;
}
