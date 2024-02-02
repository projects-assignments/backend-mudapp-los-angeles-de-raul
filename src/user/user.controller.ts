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
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'src/auth/constants/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard('Jwt'))
  findAll(@Query('limit') limit: string) {
    // console.log('Holiiiii');
    
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
