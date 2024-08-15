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
import { TrailerService } from './trailer.service';
import { CreateTrailerDto } from './dto/create-trailer.dto';
import { UpdateTrailerDto } from './dto/update-trailer.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Trailers')
@Controller('trailer')
export class TrailerController {
  constructor(private readonly trailerService: TrailerService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.owner, Role.manager, Role.dispathcer)
  @ApiOperation({summary: 'Create trailer'})
  create(@Body() createTrailerDto: CreateTrailerDto) {
    return this.trailerService.create(createTrailerDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.dispathcer, Role.owner, Role.manager)
  @ApiOperation({summary: 'Get all trailers'})
  findAll() {
    return this.trailerService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.dispathcer, Role.owner, Role.manager)
  @ApiOperation({summary: 'Get trailer by id'})
  findOne(@Param('id') id: string) {
    return this.trailerService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.dispathcer, Role.owner, Role.manager)
  @ApiOperation({summary: 'update trailer by id'})
  update(
    @Param('id') id: string,
    @Body() updateTrailerDto: UpdateTrailerDto,
  ) {
    return this.trailerService.update(id, updateTrailerDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.dispathcer, Role.owner)
  @ApiOperation({summary: 'delete trailer by id'})
  remove(@Param('id') id: string) {
    return this.trailerService.remove(id);
  }
}
