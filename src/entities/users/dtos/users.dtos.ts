import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto {
  @IsOptional()
  username: string;
  @IsOptional()
  password: string;
  @IsOptional()
  description: string;
}
