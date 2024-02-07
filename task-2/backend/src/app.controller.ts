import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomResponse } from './interface/response.interface';
import { User } from './user/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): CustomResponse<User[]> {
    return {
      isError: false,
      message: '',
      data: this.appService.getUsers(),
    };
  }
}
