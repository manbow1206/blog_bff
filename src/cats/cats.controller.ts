import {
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    Query,
    Req,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() CreateCatDto: CreateCatDto): string {
        return 'This actions adds a nes cat';
    }
    @Get()
    async findAll(@Query() query: ListAllEntities): Promise<any[]> {
        return [];
    }
    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
    @Put()
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return ``;
    }
}
