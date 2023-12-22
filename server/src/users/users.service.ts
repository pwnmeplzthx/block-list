import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { BlockListService } from 'src/block-list/block-list.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {

    constructor(
        private db: DbService,
        private accountService: AccountService,
        private blockListService: BlockListService
    ) {}

    findByEmail(email: string) {
        return this.db.user.findFirst({
            where: {
                email: email
            }
        })
    }

    async create(email: string, hash: string, salt: string) {
        // создание юзера
        const user = await this.db.user.create({
            data: {
                email, hash, salt
            }
        })
        // создание акааунта для юзера
        await this.accountService.create(user.id);
        // создание блок листа для юзера
        await this.blockListService.create(user.id);

        return user
    }
}
