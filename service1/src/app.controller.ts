import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('get_service_1')
  getHello(name: string): string {
    return this.appService.getHello(name);
  }
}
