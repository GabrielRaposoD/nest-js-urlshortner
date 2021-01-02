import { Body, Controller, Param, Get, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { ShortenerService } from './shortener.service';
import { shortenedCreationPayload } from './../types/index';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Get('/')
  async getShortenedUrls(@Res() res: Response) {
    try {
      const shorteneds = await this.shortenerService.getShortenedUrls();
      res.json(shorteneds);
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .send({ success: false, type: 'UNKNOWN', error: err.message });
    }
  }

  @Get('/:id')
  async getShortenedById(@Param('id') id: string, @Res() res: Response) {
    try {
      const shortened = await this.shortenerService.getShortenedById(id);
      res.json(shortened);
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .send({ success: false, type: 'UNKNOWN', error: err.message });
    }
  }

  @Post('/')
  async createShortenedUrl(
    @Res() res: Response,
    @Body() body: shortenedCreationPayload,
  ) {
    try {
      console.log(body);
      const shortened = await this.shortenerService.createShortenedUrl(body);
      res.json(shortened);
    } catch (err) {
      console.error(err);
      res
        .status(400)
        .send({ success: false, type: 'UNKNOWN', error: err.message });
    }
  }
}
