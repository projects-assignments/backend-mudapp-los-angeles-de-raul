import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(user: CreateUserDto) {
    return this.userRepository.save(user)
    //return 'This action adds a new user';
  }

  findAll(limit: string) {
    let options: FindManyOptions<User>;
    if (limit) options = { take: +limit };
    return this.userRepository.find(options);
    // return `This action returns all user`;
  }

  async findUser(userId: string): Promise<User> {
    return this.userRepository.findOneBy({ id: +userId });
    // return User;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateUser(userId: string, user: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    const update = await this.userRepository.update({id: +userId}, user);
    if(update) return {message: "updated ok"};
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
