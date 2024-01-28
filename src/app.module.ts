import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProviderModule } from './provider/provider.module';
import { Provider } from './provider/entities/provider.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mudapp-mudapp.a.aivencloud.com',
      port: 22116,
      username: 'avnadmin',
      password: 'AVNS_BPY9-lEHtEAPx_j04Ck',
      database: 'mudapp2',
      entities: [User, Provider],
      synchronize: false,
    }),
    UserModule,
    ProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
