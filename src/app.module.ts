import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/module';
import { UserModule } from './user/module';
import { CommonModule } from './common/module';
import { CommonService } from './common/service';
@Module({
  imports: [ CatsModule, UserModule, CommonModule],
  controllers: [ AppController ],
  providers: [ AppService, CommonService],
})
export class AppModule { }
