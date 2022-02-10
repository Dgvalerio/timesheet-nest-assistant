import { Injectable } from '@nestjs/common';

@Injectable()
/**
 * @service App
 * */
export class AppService {
  /**
   * @function getHello
   * @return {string}
   * */
  getHello(): string {
    return 'Hello World!';
  }
}
