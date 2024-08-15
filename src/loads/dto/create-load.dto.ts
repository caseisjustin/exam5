import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
enum loadStatus {
  loading = "loading",
  inTransit = "inTransit",
  delivered = "delivered",
}
export class CreateLoadDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  loadOwner: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  dispatcher: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  driver: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  price: bigint

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  pickUpAddr: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  deliveryAddr: string

  @IsEnum(loadStatus)
  @IsNotEmpty()
  @ApiProperty()
  status: loadStatus
}
