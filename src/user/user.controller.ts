import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query('limit') limit: string) {
    console.log('Holiiiii');
    
    return this.userService.findAll(limit);
  }

  // @Get(':userId')
  // findUser(@Param('userId') userId: string) {
  //   return this.userService.findUser(+userId);
  // }

    @Get(':username')
  findUser(@Param('username') username: string) {
    return this.userService.findUser(username);
  }

  @Put(':userId')
  updateUser(@Param('userId') userId: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(userId, user);
  }

  @Delete(':userId')
  removeUser(@Param('userId') userId: string) {
    return this.userService.removeUser(userId);
  }
}
