import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import _ from 'lodash';
import { Repository } from 'typeorm';

import { Ticket } from './entities/ticket.entity';
import { Event } from "../event/entities/event.entity";

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
    private eventRepository: Repository<Event>,
  ) {}

  async getAllTickets(userId: number): Promise<Ticket[]> {
    return await this.ticketRepository.findBy({
      user_id: userId,
    });
  }

  async getTicketById(id: number, userId: number): Promise<Ticket[]> {
    return await this.ticketRepository.findBy({
      user_id: userId,
      id: id
    });
  }

  async createTicket(eventId: number, userId: number, seats_quantity: number) {
    const event = await this.eventRepository.findOneBy({id: eventId})
    await this.ticketRepository.save({
      event_id: eventId,
      user_id: userId,
      seats_quantity,
      ticket_price: seats_quantity*event.price
    });
  }

}
