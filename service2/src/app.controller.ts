import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern({ cmd: 'get_service_2' })
  getHello(name: string): string {
    return this.appService.getHello(name);
  }
}
