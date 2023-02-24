import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { QUEUE } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      // transport: Transport.RMQ,
      transport: Transport.REDIS,
      options: {
        // urls: [`amqp://${QUEUE}:5672`],
        // queue: 'service_2_queue',
        // queueOptions: {
        //   durable: true,
        // },
        host: QUEUE,
        port: 6379,
      },
    },
  );
  app.listen();
}
bootstrap();
