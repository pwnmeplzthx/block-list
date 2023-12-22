import { ApiProperty } from "@nestjs/swagger";
import { $Enums } from "@prisma/client";
import { IsIn, IsOptional } from "class-validator";

// Элемент списка блок-листа
export class BlockItemDto {
    @ApiProperty()
        id: number;

    @ApiProperty()
        blockListId: number;

    @ApiProperty({
        enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website] 
    })
        type: $Enums.BlockItemType;

    @ApiProperty()
        data: string;

    @ApiProperty()
        createdAt: Date;
}

// Список блок-лист
export class BlockListDto {
    @ApiProperty()
        id: number;

    @ApiProperty()
        ownerId: number;

    @ApiProperty({
        type: [BlockItemDto]
    })
        items: BlockItemDto[];
}

// Поисковый запрос
export class BlockListQueryDto {
    @ApiProperty({
        required: false,
    })
    @IsOptional()
        q?: string;
}

// Добавление итема в блоклист
export class AddBlockItemDto {
    @ApiProperty({
        enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website] 
    })
    @IsIn([$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website])
        type: $Enums.BlockItemType;

    @ApiProperty()
        data: string;
}