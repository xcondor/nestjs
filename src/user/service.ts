import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserInfo(): string {
    return 'NestJs, GET user infos';
  }

  getAllUsers(): string {
    return `
      <p style="color:red">GET ALL CATS!</p>
    `
  }
}
