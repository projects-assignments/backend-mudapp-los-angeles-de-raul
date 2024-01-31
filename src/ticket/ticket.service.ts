import { HttpException, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Provider } from 'src/provider/entities/provider.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    @InjectDataSource()private dataSource:DataSource
    // @InjectRepository(User) private userRepository: Repository<User>,
    // @InjectRepository(Provider) private providerRepository: Repository<Provider>,
  ) {}
  async newTransport(createTicketDto:CreateTicketDto){
    const queryRunner=this.dataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    try{
      const availableProvider= await queryRunner.manager.findOne(Provider, {
        where:{id:  createTicketDto.provider.id, availability:true},
      })
      if(!availableProvider){
        throw new HttpException('No disponible',404);
      }
      const ticket= await queryRunner.manager.save(Ticket, createTicketDto);

      availableProvider.availability=false;
      await queryRunner.manager.save(Provider,availableProvider);
      await queryRunner.commitTransaction();
      return ticket
    }catch  (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    }finally{
      await queryRunner.release();
    }
    
  }

  async findAll(): Promise<Ticket[]> {
    // return `This action returns all ticket`;
    return this.ticketRepository.find({ relations: ['user', 'provider'] });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} ticket`;
  // }

 
}
