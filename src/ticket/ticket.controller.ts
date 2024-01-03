import { User } from 'src/user/entities/user.entity';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


import { UserInfo } from '../utils/userInfo.decorator';
import { TicketDto } from './dto/ticket.dto';
import { TicketService } from './ticket.service';

@UseGuards(AuthGuard('jwt'))
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async getAllTickets(@UserInfo() user: User) {
    return await this.ticketService.getAllTickets(user.id);
  }

  @Get(':id')
  async getTicketById(@UserInfo() user: User, @Param('id') id: number) {
    return await this.ticketService.getTicketById(id, user.id);
  }

  @Post(':eventId')
  async createTicket(
    @UserInfo() user: User,
    @Param('eventId') eventId: number,
    @Body() ticketDto: TicketDto,
  ) {
    await this.ticketService.createTicket(
      eventId,
      user.id,
      ticketDto.seats_quantity,
    );
  }
}
