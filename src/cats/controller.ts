import { Controller, Get } from '@nestjs/common';
import { CatService } from './service';

@Controller('cat')
export class CatController {
  constructor(private readonly CatService: CatService) {}

  @Get()
  getCats(): string {
    return this.CatService.getCats();
  }

  @Get('all')
  getAllCats(): string {
    return this.CatService.getAllCats();
  }
}
