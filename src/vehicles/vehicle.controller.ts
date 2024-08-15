import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum'; // To'g'ri import
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.manager)
  @ApiOperation({summary: 'Create vehicle'})
  create(@Body() createCarDto: CreateVehicleDto) {
    return this.vehicleService.create(createCarDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.manager)
  @ApiOperation({summary: 'Get all vehicles'})
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.manager)
  @ApiOperation({summary: 'Get vehicle by id'})
  findOne(@Param('id') id: string) {
    return this.vehicleService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.manager)
  @ApiOperation({summary: 'Update vehicle by id'})
  update(@Param('id') id: string, @Body() updateCarDto: UpdateVehicleDto) {
    return this.vehicleService.update(id, updateCarDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.manager)
  @ApiOperation({summary: 'Delete vehicle by provided id'})
  remove(@Param('id') id: string) {
    return this.vehicleService.remove(id);
  }
}
