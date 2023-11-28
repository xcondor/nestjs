import { Controller, Get } from '@nestjs/common';
import { UserService } from './service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('info')
  getCats(): string {
    return this.UserService.getUserInfo();
  }

  @Get('all')
  getAllCats(): string {
    return this.UserService.getAllUsers();
  }
}
