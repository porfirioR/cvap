import { Injectable } from '@nestjs/common';
import { CoreModel } from './models/core-model';

@Injectable()
export class AppService {
  getHello(): CoreModel {
    return new CoreModel('Hello World!');
  }
}
