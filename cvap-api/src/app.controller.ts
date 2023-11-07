import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CoreModel } from './models/core-model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): CoreModel {
    return this.appService.getHello();
  }
}
