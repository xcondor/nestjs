import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonService } from './common/service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly commonService: CommonService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('common')
  getCommon(): string {
    return this.commonService.getCommon();
  }

}
