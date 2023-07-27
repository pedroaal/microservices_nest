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
        transport: Transport.REDIS,
        options: {
          host: QUEUE,
          port: 6379,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
