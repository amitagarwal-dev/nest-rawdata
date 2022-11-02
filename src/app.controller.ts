import { Controller, Get, Post, RawBodyRequest, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Req() req: RawBodyRequest<Request> ): string {
    console.log(req.rawBody);
    return this.appService.getHello();
  }
}
