import { CreateUserDto } from './dtos/createUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  //   getUsers() {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
    return 'yo';
  }
}
