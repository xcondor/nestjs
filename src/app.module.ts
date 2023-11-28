import { CatsModule } from './cats/module';
import { UserModule } from './user/module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ CatsModule, UserModule],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule { }
