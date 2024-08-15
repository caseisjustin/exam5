import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrailerDto } from './dto/create-trailer.dto';
import { UpdateTrailerDto } from './dto/update-trailer.dto';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class TrailerService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  create(createTrailerDto: CreateTrailerDto) {
    return this.prisma.trailer.create({
      data: createTrailerDto,
    });
  }

  async findAll() {
    const trailers = await this.cacheManager.get('trailers');
    if (trailers) {
      return trailers;
    }

    let data = await this.prisma.trailer.findMany();
    if (data) {
      this.cacheManager.set('trailers', data, 20000);
      return data;
    }
    return "Couldn't find";
  }

  findOne(id: string) {
    return this.prisma.trailer.findUnique({
      where: { id },
    });
  }

  update(id: string, updateTrailerDto: UpdateTrailerDto) {
    return this.prisma.trailer.update({
      where: { id },
      data: updateTrailerDto,
    });
  }

  remove(id: string) {
    return this.prisma.trailer.delete({
      where: { id },
    });
  }
}
