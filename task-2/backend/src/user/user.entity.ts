import { Injectable } from '@nestjs/common';

@Injectable()
export class User {
  name: string;
  age: number;
  photoUrl: string;

  constructor(name: string, age: number, photoUrl: string) {
    this.name = name;
    this.age = age;
    this.photoUrl = photoUrl;
  }
}
