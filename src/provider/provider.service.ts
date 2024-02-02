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
  create(provider: CreateProviderDto) {
    return this.providerRepository.save(
      this.providerRepository.create(provider),
    );
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

  async updateProvider(providerId: number, provider: UpdateProviderDto) {
    const update = await this.providerRepository.update(
      { id: providerId },
      provider,
    );
    if (update) {
      return { message: 'provider updated' };
    }
  }

  async removeProvider(providerId: number) {
    const deleteProvider = await this.providerRepository.delete({
      id: providerId,
    });
    if (deleteProvider) return { message: 'provider removed' };
  }
}
