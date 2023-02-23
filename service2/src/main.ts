import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { PORT, QUEUE } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      // transport: Transport.RMQ,
      // options: {
      //   urls: [`amqp://${QUEUE}:${PORT}`],
      //   queue: 'service_2_queue',
      //   queueOptions: {
      //     durable: true,
      //   },
      // },
      transport: Transport.REDIS,
      options: {
        url: `redis://${QUEUE}:${PORT}`,
      },
    },
  );
  app.listen();
}
bootstrap();
