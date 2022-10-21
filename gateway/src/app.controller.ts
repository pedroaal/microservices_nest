import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('service1')
  getService1(): string {
    console.log('service_1');
    return this.appService.getService1();
  }

  @Get('service2')
  getService2(): string {
    console.log('service_2');
    return this.appService.getService2();
  }
}
