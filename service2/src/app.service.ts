import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string): string {
    let x = 0.0001;
    for (let i = 0; i <= 1000000; i++) {
      x += Math.sqrt(x);
    }
    return `Hello World! from service 2, ${name}`;
  }
}
