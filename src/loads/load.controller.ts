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
import { LoadService } from './load.service';
import { CreateLoadDto } from './dto/create-load.dto';
import { UpdateLoadDto } from './dto/update-load.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Loads")
@Controller('load')
export class LoadController {
  constructor(private readonly loadService: LoadService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.manager)
  @ApiOperation({summary: 'Create Load'})
  create(@Body() createLoadDto: CreateLoadDto) {
    return this.loadService.create(createLoadDto);
  }

  @Get()
  @ApiOperation({summary: "Get all  loads"})
  findAll() {
    return this.loadService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Get  load by id"})
  findOne(@Param('id') id: string) {
    return this.loadService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.manager, Role.owner)
  @ApiOperation({summary: "Update  load by id"})
  update(@Param('id') id: string, @Body() updateLoadDto: UpdateLoadDto) {
    return this.loadService.update(id, updateLoadDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.manager)
  @ApiOperation({summary: "Delete  load by id"})
  remove(@Param('id') id: string) {
    return this.loadService.remove(id);
  }
}
