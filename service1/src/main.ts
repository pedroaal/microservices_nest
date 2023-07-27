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
          brokers: ['192.168.10.106:19092'],
        },
        consumer: {
          groupId: 'micro-1-consumer',
        },
      },
    },
  );
  app.listen();
}
bootstrap();
