import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DbService extends PrismaClient implements OnModuleInit {
    // Запускается при инициализации модуля
    async onModuleInit() {
        // Подключение к призме
        await this.$connect()
    }
}
