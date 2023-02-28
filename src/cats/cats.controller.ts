import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dtos/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private HttpExceptionFilter: HttpExceptionFilter,
  ) {}
  @Post()
  @UseFilters(HttpExceptionFilter)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(@Query() query: ListAllEntities) {
    try {
      await this.catsService.findAll();
    } catch (error) {
      throw new ForbiddenException();
    }
  }
  @Get(':id')
  findOne(@Param("id", ParseIntPipe) id: number){
    return this.catsService.findOne(id);
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
