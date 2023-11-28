import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getCats(): string {
    return 'NestJs, GET CATS successful!';
  }

  getAllCats(): string {
    return `
      <p style="color:red">GET ALL CATS!</p>
    `
  }
}
