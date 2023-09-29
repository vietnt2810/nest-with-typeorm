import { Users } from './users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserParams } from './types/users.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}
  createUser(createUserParams: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...createUserParams,
    });
    return this.userRepository.save(newUser);
  }
}
