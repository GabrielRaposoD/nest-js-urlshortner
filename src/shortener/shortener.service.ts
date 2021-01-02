import { ShortenerRepository } from './shortener.repository';
import { Injectable } from '@nestjs/common';
import { shortenedCreationPayload } from './../types/index';

@Injectable()
export class ShortenerService {
  constructor(private readonly shortenerRepository: ShortenerRepository) {}

  async getShortenedUrls() {
    const shorteneds = await this.shortenerRepository.getShortenedUrls();

    if (!shorteneds) {
      throw new Error('Database is empty');
    }

    return shorteneds;
  }

  async getShortenedById(id: string) {
    const shortened = await this.shortenerRepository.getShortenedById(id);

    if (!shortened) {
      throw new Error('Invalid Link');
    }

    return shortened;
  }

  async createShortenedUrl(body: shortenedCreationPayload) {
    const shortened = await this.shortenerRepository.createShortenedUrl(body);

    return shortened;
  }
}
