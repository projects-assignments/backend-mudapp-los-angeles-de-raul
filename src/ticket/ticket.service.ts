import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Provider } from 'src/provider/entities/provider.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    // @InjectRepository(User) private userRepository: Repository<User>,
    // @InjectRepository(Provider) private providerRepository: Repository<Provider>,
  ) {}
  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }

  async findAll(): Promise<Ticket[]> {
    // return `This action returns all ticket`;
    return this.ticketRepository.find({ relations: ['user', 'provider'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
