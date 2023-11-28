import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  getCommon(): string {
    return `
      <p style="color:red">COMMON</p>
    `
  }
}
