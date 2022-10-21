import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MICROSERVICE_1') private readonly client1: ClientProxy,
    @Inject('MICROSERVICE_2') private readonly client2: ClientProxy,
  ) {}

  getHello(): string {
    let x = 0.0001;
    for (let i = 0; i <= 1000000; i++) {
      x += Math.sqrt(x);
    }
    return 'Hello World! from gateway';
  }

  getService1(): any {
    console.log(process.env.QUEUE_IP);
    return this.client1.send({ cmd: 'get_service_1' }, 'gateway');
  }

  getService2(): any {
    return this.client2.send({ cmd: 'get_service_2' }, 'gateway');
  }
}
