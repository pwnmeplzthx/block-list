import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddBlockItemDto, BlockListDto, BlockListQueryDto } from './dto';

@Injectable()
export class BlockListService {

    constructor(
        private db: DbService
    ){}

    create(userId: number) {
        return this.db.blockList.create({
            data: {
                ownerId: userId
            }
        });
    }

    getByUserId(userId: number, query: BlockListQueryDto) {
        return this.db.blockList.findFirstOrThrow({
            where: {
                ownerId: userId
            },
            // Подтягивание ссылочных зависимостей
            include: {
                items: {
                    where: {
                        // insensitive - не учитывать регистр
                        data: {contains: query.q, mode: 'insensitive'}
                    },
                    orderBy: {createdAt: 'desc'},
                }
            }
        })
    }

    async addItem(userId: number, data: AddBlockItemDto): Promise<BlockListDto> {
        const blockList =  await this.db.blockList.findUniqueOrThrow({
            where: {
                ownerId: userId
            },
            include: {
                items: true,
            }
        });

        await this.db.blockItem.create({
            data: {
                ...data,
                blockListId: blockList.id,
            }
        })

        return blockList;
    }

    async removeItem(userId: number, itemId: number) {
        const blockList =  await this.db.blockList.findUniqueOrThrow({
            where: {
                ownerId: userId
            }
        });

        return this.db.blockItem.delete({
            where: {
                blockListId: blockList.id,
                id: itemId
            }
        })
    }
}
