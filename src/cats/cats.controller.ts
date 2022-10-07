import {Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface';
import {HttpExeptionFilter} from 'src/middleware/http-exception.filter';

@Controller('cats')
@UseFilters(new HttpExeptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN);

    return this.catsService.findAll();
  }
}

