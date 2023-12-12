import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ROLES } from '@company/lib-utils';

export class UserUpdateDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(ROLES)
  role: ROLES;

  constructor(
    firstName: string,
    email: string,
    username: string,
    password: string,
    role: ROLES
  ) {
    this.firstName = firstName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
