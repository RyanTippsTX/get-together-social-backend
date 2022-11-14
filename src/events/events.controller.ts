import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('events')
export class EventsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEvents(): string {
    return 'Placeholder API route for /events';
  }

  @Get(':id')
  getEvent(@Param('id') id): string {
    return 'Placeholder API route for /events/' + id;
  }
}
