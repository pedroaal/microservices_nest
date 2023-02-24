import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PORT, QUEUE } from './config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICROSERVICE_1',
        transport: Transport.REDIS,
        options: {
          host: '192.168.1.8',
          port: 6379,
        },
      },
      // {
      //   name: 'MICROSERVICE_1',
      //   transport: Transport.RMQ,
      //   options: {
      //     urls: [`amqp://${QUEUE}:5672`],
      //     queue: 'service_1_queue',
      //     queueOptions: {
      //       durable: true,
      //     },
      //   },
      // },
      // {
      //   name: 'MICROSERVICE_2',
      //   transport: Transport.RMQ,
      //   options: {
      //     urls: [`amqp://${QUEUE}:5672`],
      //     queue: 'service_2_queue',
      //     queueOptions: {
      //       durable: true,
      //     },
      //   },
      // },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
