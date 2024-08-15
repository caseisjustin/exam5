import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLoadDto } from './dto/create-load.dto';
import { UpdateLoadDto } from './dto/update-load.dto';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class LoadService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  create(createLoadDto: CreateLoadDto) {
    return this.prisma.load.create({
      data: createLoadDto,
    });
  }

  async findAll() {
    const loads = await this.cacheManager.get('loads');
    if (loads) {
      return loads;
    }

    let data = await this.prisma.load.findMany();
    if (data) {
      this.cacheManager.set('loads', data, 20000);
      return data;
    }
    return "Couldn't find";
  }

  findOne(id: string) {
    return this.prisma.load.findUnique({
      where: { id },
    });
  }

  update(id: string, updateLoadDto: UpdateLoadDto) {
    return this.prisma.load.update({
      where: { id },
      data: updateLoadDto,
    });
  }

  remove(id: string) {
    return this.prisma.load.delete({
      where: { id },
    });
  }
}
