import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QUEUE } from './config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICROSERVICE_1',
        transport: Transport.RMQ,
        options: {
          urls: [QUEUE],
          queue: 'service_1_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'MICROSERVICE_2',
        transport: Transport.RMQ,
        options: {
          urls: [QUEUE],
          queue: 'service_2_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
