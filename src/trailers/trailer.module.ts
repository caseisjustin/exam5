import { Module } from '@nestjs/common';
import { TrailerService } from './trailer.service';
import { TrailerController } from './trailer.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TrailerController],
  providers: [TrailerService, PrismaService],
})
export class TrailerModule {}
