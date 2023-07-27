import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MICROSERVICE_1') private readonly client1: ClientKafka,
    @Inject('MICROSERVICE_2') private readonly client2: ClientKafka,
  ) { }

  getHello(): string {
    let x = 0.0001;
    for (let i = 0; i <= 1000000; i++) {
      x += Math.sqrt(x);
    }
    return 'Hello World! from gateway';
  }

  getService1(): any {
    console.log('service_1');
    return this.client1.emit('get_service_1', 'gateway');
  }

  getService2(): any {
    console.log('service_2');
    return this.client1.emit('get_service_2', 'gateway');
  }
}
