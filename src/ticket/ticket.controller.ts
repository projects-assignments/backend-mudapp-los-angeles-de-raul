import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  newTransport(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.newTransport(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  
}
