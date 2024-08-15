import { Module } from '@nestjs/common';
import { LoadService } from './load.service';
import { LoadController } from './load.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [LoadController],
  providers: [LoadService, PrismaService],
})
export class LoadModule {}
