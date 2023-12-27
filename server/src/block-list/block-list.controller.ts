import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AddBlockItemDto, BlockListDto, BlockListQueryDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { BlockListService } from './block-list.service';

@Controller('block-list')
// декоратор, делает сессию доступной во всех эндпоинтах контроллера
@UseGuards(AuthGuard)
export class BlockListController {

    constructor(
        private blockListService: BlockListService
    ) {}

    @Get()
    @ApiOkResponse({
        type: BlockListDto
    })
    getList(
        @Query() query: BlockListQueryDto,
        @SessionInfo() session: GetSessionInfoDto
    ): Promise<BlockListDto> {
        return this.blockListService.getByUserId(session.id, query);
    }

    @Post('item')
    @ApiCreatedResponse({
        type: BlockListDto
    })
    addBlockListItem(
        @Body() body: AddBlockItemDto,
        @SessionInfo() session: GetSessionInfoDto
    ):Promise<BlockListDto> {
        return this.blockListService.addItem(session.id, body);
    }

    @Delete('item/:id')
    @ApiOkResponse({
        type: 'number',
    })
    async removeBlockListItem(
        // Преобразование из строки в число ParseIntPipe
        @Param('id', ParseIntPipe) id: number,
        @SessionInfo() session: GetSessionInfoDto
    ) {
        await this.blockListService.removeItem(session.id, id);

        return id;
    }
}
