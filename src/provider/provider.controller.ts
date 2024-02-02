import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providerService.create(createProviderDto);
  }

  @Get()
  findAll(@Query('limit') limit: string) {
    return this.providerService.findAll(limit);
  }

  @Get(':providerId')
  findProvider(@Param('providerId') providerId: string) {
    return this.providerService.findProvider(providerId);
  }

  @Put(':providerId')
  updateProvider(
    @Param('providerId') providerId: number,
    @Body() provider: UpdateProviderDto,
  ) {
    return this.providerService.updateProvider(providerId, provider);
  }

  @Delete(':providerId')
  removeProvider(@Param('providerId') providerId: number) {
    return this.providerService.removeProvider(providerId);
  }
}
