import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions } from 'typeorm';

describe('UserController', () => {
  let controller: UserController;
  let mockService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('should return one user acording the introduce user name', () => {
  //   //  let result= User ;
  //   let result: User = {
  //     username: 'Nacho',
  //     password: '13345',
  //     email: 'nachitobonito@gmail.com',
  //     name: 'Nachito',
  //     lastname: 'Sambade',
  //     admin: true,
  //   };

  //   jest.spyOn(service, 'findUser').mockImplementation(() => {});

  //   expect(controller.findUser('username')).toBe(result);
  // });

  
});
