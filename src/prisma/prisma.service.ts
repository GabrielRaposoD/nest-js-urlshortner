import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['error'],
    })
  }

  async onModuleInit() {
    await this.$connect()
    console.log('Connected Prisma to database')
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}
