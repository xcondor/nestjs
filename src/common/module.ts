/*
https://docs.nestjs.com/modules
*/

import { Global, Module } from '@nestjs/common';
import { CommonService } from './service';

@Global()
@Module({
    imports: [],
    providers: [CommonService],
    exports: [CommonService]
})
export class CommonModule { }
