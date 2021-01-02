import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ShortenerController } from './shortener.controller';
import { ShortenerRepository } from './shortener.repository';
import { ShortenerService } from './shortener.service';

@Module({
  imports: [PrismaModule],
  controllers: [ShortenerController],
  providers: [ShortenerService, ShortenerRepository],
})
export class ShortenerModule {}
