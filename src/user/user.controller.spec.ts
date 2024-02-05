import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UserController', () => {
  let controller: UserController;
  let mockService = {
    create: jest.fn((dto) => { 
      return {
        id: Math.random() * (1000 - 1) + 1, 
        ...dto,
      };
    }),
    updateUser: jest.fn((id, dto) => {
      return {
        id: id,
        ...dto
      }
    }), 
  };

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

  it('should create user', () => {
    const createUserDto: CreateUserDto = {
      username: 'Nacho',
      password: '13345',
      email: 'nachitobonito@gmail.com',
      name: 'Nachito',
      lastname: 'Sambade',
      admin: true,
    };
    expect(controller.create(createUserDto)).toEqual({ 
      id: expect.any(Number),
      ...createUserDto,
  })
})
  it('should update user', ()=> {
    const updateUserDto: UpdateUserDto = {
      username: 'Balbino',
      password: '139345',
      email: 'nachitobonitoclaroquesi@gmail.com',
      name: 'Nacha',
      lastname: 'Sambade',
      admin: true,
    }
    const userId = 3;

    expect(controller.updateUser(userId, updateUserDto)).toEqual(
      {
        id: userId,
        ...updateUserDto
      }
    );
    expect(mockService.updateUser).toHaveBeenCalledWith( 
      userId,
      updateUserDto,
      )
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
