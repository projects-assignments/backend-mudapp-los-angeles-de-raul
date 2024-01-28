/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from './entities/provider.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
  ) {}
  create(createProviderDto: CreateProviderDto) {
    return 'This action adds a new provider';
  }

  findAll(limit: string) {
    // return `This action returns all provider`;
    let options: FindManyOptions<Provider>;
    if (limit) options = { take: +limit };
    return this.providerRepository.find(options);
  }

  findProvider(providerId: string): Promise<Provider> {
    // return `This action returns a #${id} provider`;
    return this.providerRepository.findOneBy({ id: +providerId });
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
