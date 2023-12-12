import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../common/base.dto';
import { ROLES } from '@company/lib-utils';

export class UserDTO extends BaseDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    username: string,
    password: string,
    email: string,
    role: ROLES
  ) {
    super(firstName, lastName, age);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
  }
}
