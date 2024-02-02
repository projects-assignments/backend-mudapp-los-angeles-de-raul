import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { getRepositoryToken } from '@nestjs/typeorm';

// Cambiar todos los src de las rutas por puntos y barras ../- para que los test pasen.
// const mockUsers: User[] = [
//   {
//     id: 1,
//     username: 'mikbe',
//     password: '12345',
//     email: 'mikbe@gmail.com',
//     name: 'Belén',
//     lastname: 'Alonso',
//     role: 'admin',
//     // hashPassword()
//     tickets: []
//   },
// ];

describe('UserService', () => {
  let service: UserService;
  const mockRepositoryUser = {
    save: jest.fn().mockImplementation((createUserDTO: CreateUserDto) => {
      return Promise.resolve({
        id: 1,
        tickets: [],
        ...createUserDTO,
      });
    }),
    // find: jest.fn().mockImplementation(() => mockUsers),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepositoryUser,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  describe('method create', () => {

    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    // it('should create one user', async () => {
    //   const createUserDto = {
    //     username: 'Nacho',
    //     password: '13345',
    //     name: 'Nachito',
    //     lastname: 'Sambade',
    //     role:'admin',
    //   };
    //   const result = await service.create(createUserDto);
    //   expect(result).toMatchObject(mockUsers[0]);
    // });

  });
});
