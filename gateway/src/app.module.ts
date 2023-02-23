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
        // transport: Transport.RMQ,
        transport: Transport.REDIS,
        options: {
          // urls: [`amqp://${QUEUE}:${PORT}`],
          // queue: 'service_1_queue',
          // queueOptions: {
          //   durable: true,
          // },
          url: `redis://${QUEUE}:${PORT}`,
        },
      },
      {
        name: 'MICROSERVICE_2',
        // transport: Transport.RMQ,
        transport: Transport.REDIS,
        options: {
          // urls: [`amqp://${QUEUE}:${PORT}`],
          // queue: 'service_2_queue',
          // queueOptions: {
          //   durable: true,
          // },
          url: `redis://${QUEUE}:${PORT}`,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
