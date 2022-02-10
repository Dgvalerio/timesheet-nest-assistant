import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
/**
 * @controller App
 * */
export class AppController {
  /**
   * Constructor of AppController
   * @param {AppService} appService
   * */
  constructor(private readonly appService: AppService) {}

  /**
   * @function getHello
   * @description Route of Hello Word!
   * @return {string}
   * */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
