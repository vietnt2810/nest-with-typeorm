import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dtos';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.findUsers();
  }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);

    return 'Created new user successfully';
  }

  @Patch(':id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    this.usersService.updateUser(id, updateUserDto);

    return 'Updated new user successfully';
  }

  @Delete(':id')
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    this.usersService.deleteUser(id);

    return 'Deleted user successfully';
  }
}
