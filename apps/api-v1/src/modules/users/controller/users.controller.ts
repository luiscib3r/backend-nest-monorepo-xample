import { UserDTO, userFactory, userValidator } from '@company/lib-dto ';
//import { HttpProblemUtil } from '@company/lib-utils';
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('hello')
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('register')
  public async registrerUser(@Body() body: UserDTO) {
    return await this.userService.createUser(body);
  }

  @Post('register1')
  public async registrerUser1(
    @Res() response: Response,
    @Body() body: UserDTO
  ) {
    const validation = userValidator.validate(body);
    if (validation.hasErrors === true) {
      return response.status(HttpStatus.BAD_REQUEST).json();
    }
    return userFactory.create(body);
    //return await this.userService.createUser(body);
  }
}
