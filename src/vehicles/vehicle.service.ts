import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class VehicleService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  create(createvehicleDto: CreateVehicleDto) {
    return this.prisma.vehicle.create({
      data: createvehicleDto,
    });
  }

  async findAll() {
    const vehicles = await this.cacheManager.get('vehicles');
    if (vehicles) {
      return vehicles;
    }

    let data = await this.prisma.vehicle.findMany();
    if (data) {
      this.cacheManager.set('vehicles', data, 20000);
      return data;
    }
    return "Couldn't find";
  }

  findOne(id: string) {
    return this.prisma.vehicle.findUnique({
      where: { id },
    });
  }

  findByCompanyId(id: string) {
    return this.prisma.vehicle.findMany({
      where: { id: id },
    });
  }

  update(id: string, updatevehicleDto: UpdateVehicleDto) {
    return this.prisma.vehicle.update({
      where: { id },
      data: updatevehicleDto,
    });
  }

  remove(id: string) {
    return this.prisma.vehicle.delete({
      where: { id },
    });
  }
}
