import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShortenerModule } from './shortener/shortener.module';

@Module({
  imports: [ConfigModule.forRoot(), ShortenerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
