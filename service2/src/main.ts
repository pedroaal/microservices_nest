import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { QUEUE } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      // transport: Transport.RMQ,
      // transport: Transport.REDIS,
      transport: Transport.KAFKA,
      options: {
        // rabitmq
        // urls: [`amqp://${QUEUE}:5672`],
        // queue: 'service_2_queue',
        // queueOptions: {
        //   durable: true,
        // },
        // redis
        // host: QUEUE,
        // port: 6379,
        client: {
          brokers: ['localhost:9092'],
        }
      },
    },
  );
  app.listen();
}
bootstrap();
