/* eslint-disable @typescript-eslint/no-unused-vars */
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateTicketDto } from './dto/update-ticket.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @ApiOperation({ summary: 'create ticket' })
  @ApiResponse({ status: 404, description: 'forbidden' })
  newTransport(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.newTransport(createTicketDto);
  }

  @Get()
  @ApiOperation({ summary: 'all tickets found' })
  @ApiResponse({ status: 404, description: 'forbidden' })
  findAll() {
    return this.ticketService.findAll();
  }
}
