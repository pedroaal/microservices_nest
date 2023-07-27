import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICROSERVICE_1',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'micro-1',
            brokers: ['redpanda:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'micro-1-consumer'
          }
        },
      },
      {
        name: 'MICROSERVICE_2',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'micro-2',
            brokers: ['redpanda:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'micro-2-consumer'
          }
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
