import { Injectable } from '@nestjs/common';
import { User } from './user/user.entity';

@Injectable()
export class AppService {
  constructor() {}

  getUsers(): User[] {
    const users = [];

    for (let i = 0; i < 10; i++) {
      users.push(this.generateRandomUser());
    }

    return users;
  }

  generateRandomUser(): User {
    const randomName = `${this.generateRandomString(this.getRandomInt(3, 10))} ${this.generateRandomString(this.getRandomInt(5, 10))}`;
    const randomAge = this.getRandomInt(5, 100);

    return new User(
      randomName,
      randomAge,
      `https://picsum.photos/${this.getRandomInt(0, 200)}/100`,
    );
  }

  generateRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
