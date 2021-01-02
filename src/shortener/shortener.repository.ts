import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { shortenedCreationPayload } from './../types/index';
import ShortUniqueId from 'short-unique-id';

@Injectable()
export class ShortenerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getShortenedUrls() {
    const shorteneds = await this.prisma.shortened.findMany({});

    return shorteneds;
  }

  async getShortenedById(id: string) {
    const shortened = await this.prisma.shortened.findUnique({
      where: {
        id: id,
      },
    });

    return shortened;
  }

  async createShortenedUrl(body: shortenedCreationPayload) {
    const uid = new ShortUniqueId();
    const shortened = await this.prisma.shortened.create({
      data: {
        id: uid(),
        url: body.url,
      },
    });

    console.log(shortened);

    return shortened;
  }
}
