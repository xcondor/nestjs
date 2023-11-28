/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CatController } from './controller';
import { CatService } from './service';
@Module({
    imports: [],
    controllers: [CatController],
    providers: [CatService],
})
export class CatsModule { }
