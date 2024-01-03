import _ from 'lodash';
import { Repository } from 'typeorm';

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find({
      select: ['id', 'title', 'category']
    });
  }

  async findEventByName(title: string): Promise<Event[]> {
    return await this.eventRepository.find({
      where: { title },
      select: ['id', 'title', 'category']
    });
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOne({       
      where: { id },
      select: ['id', 'title', 'category'] });
    if (_.isNil(event)) {
      throw new NotFoundException('존재하지 않는 공연입니다.');
    }
    return event;
  }

  async create(createEventDto: CreateEventDto) {
    const event = await this.eventRepository.save(createEventDto);

    return event;
  }
}