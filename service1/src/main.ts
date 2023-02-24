import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { PORT, QUEUE } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      // transport: Transport.RMQ,
      transport: Transport.REDIS,
      options: {
        // urls: [`amqp://${QUEUE}:5672`],
        // queue: 'service_1_queue',
        // queueOptions: {
        //   durable: true,
        // },
        host: '192.168.1.8',
        port: 6379,
      },
    },
  );
  app.listen();
}
bootstrap();
