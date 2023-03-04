import { Injectable } from '@nestjs/common';
import { Cat } from '../interface/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(activityOnly, page): Cat[] {
    return this.cats;
  }
  findOne(id) {
    return this.cats[id];
  }
}
