import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/user/types/userRole.type';

import {
  Body, Controller, Delete, Get, Param, Post, Put, UseGuards
} from '@nestjs/common';

import { CreateEventDto } from './dto/create-event.dto';
import { EventService } from './event.service';

@UseGuards(RolesGuard)
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async findAll() {
    return await this.eventService.findAll();
  }

  @Get(":title")
  findEventByName(@Param("title") title: string) {
    return this.eventService.findEventByName(title);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Roles(Role.Admin)
  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    await this.eventService.create(createEventDto);
  }
}
