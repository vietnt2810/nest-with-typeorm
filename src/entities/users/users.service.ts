import { Users } from './users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon from 'argon2';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  async createUser(createUserRequestBody: CreateUserDto) {
    const newUser = this.userRepository.create({
      username: createUserRequestBody.username,
      password: await argon.hash(createUserRequestBody.password),
    });

    this.userRepository.save(newUser);
  }

  async updateUser(id: number, updateUserRequestBody: UpdateUserDto) {
    this.userRepository.update(id, {
      ...updateUserRequestBody,
      password: updateUserRequestBody.password
        ? await argon.hash(updateUserRequestBody.password)
        : undefined,
    });
  }

  deleteUser(id: number) {
    this.userRepository.delete(id);
  }
}
