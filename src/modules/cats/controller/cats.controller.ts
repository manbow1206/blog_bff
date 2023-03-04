import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  SetMetadata,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { RolesGuard } from 'src/guard/roles.guard';
import { JoiValidationPipe } from 'src/pipe/joivalidation.pipe';
import { CatsService } from '../service/cats.service';
import {
  CreateCatDto,
  createCatSchema,
  ListAllEntities,
  UpdateCatDto,
} from '../dto/cats.dto';
import { Roles } from 'src/decorator/roles.decorator';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private HttpExceptionFilter: HttpExceptionFilter,
  ) {}
  @Post()
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new JoiValidationPipe(createCatSchema))
  @Roles('admin')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
    activityOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe)
    page: number,
  ) {
    try {
      await this.catsService.findAll(activityOnly, page);
    } catch (error) {
      throw new ForbiddenException();
    }
  }
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id) {
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
