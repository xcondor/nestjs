import { Controller, Get } from '@nestjs/common';
import { UserService } from './service';
import { CommonService } from 'src/common/service';
@Controller('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
    private readonly commonService: CommonService
  ) { }

  @Get('info')
  getCats(): string {
    return this.UserService.getUserInfo();
  }

  @Get('all')
  getAllCats(): string {
    return this.UserService.getAllUsers();
  }
  @Get('common')
  getUserCommon(): string {
    return this.commonService.getCommon();
  }
}
