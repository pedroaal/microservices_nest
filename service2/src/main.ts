import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { QUEUE } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [QUEUE],
        queue: 'service_2_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  app.listen();
}
bootstrap();
