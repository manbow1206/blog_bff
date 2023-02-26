import { Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    // @Post()
    // create(): string {
    //     return 'This actions adds a nes cat';
    // }
    @Get()
    async findAll(@Req() request: Request): Promise<any[]> {
        return [];
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
}
