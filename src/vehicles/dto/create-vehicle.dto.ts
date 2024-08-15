import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  owner: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  driver: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  currentLocation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  vehicleNum: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  trailer: string
}
