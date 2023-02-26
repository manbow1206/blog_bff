import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    Query,
    Req,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dtos/cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() CreateCatDto: CreateCatDto): string {
        return 'This actions adds a new cat';
    }
    @Get()
    async findAll(@Query() query: ListAllEntities) {
        return `This actions find all cats`;
    }
    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
    @Put()
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete()
    remove(@Param('id') id: string) {
        return `This action delete a #${id} cat`;
    }
}
