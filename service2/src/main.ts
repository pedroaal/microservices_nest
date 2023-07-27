import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['redpanda:9092'],
        },
        consumer: {
          groupId: 'micro-2-consumer',
        },
      },
    },
  );
  app.listen();
}
bootstrap();
