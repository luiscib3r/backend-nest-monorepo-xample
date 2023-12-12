import * as bcrypt from 'bcrypt';
//import { response } from 'express';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO, UserUpdateDTO, UsersEntity } from '@company/lib-dto ';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>
  ) {}
  getHello(): string {
    return 'Hello user!';
  }

  public async createUser(body: UserDTO): Promise<UsersEntity> {
    try {
      //body.password = await bcrypt.hash(body.password, +process.env.HASH_SALT);
      return await this.userRepository.save(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async createUser1(body: UserDTO): Promise<UsersEntity> {
    body.password = await bcrypt.hash(body.password, +process.env.HASH_SALT);
    return await this.userRepository.save(body);
  }

  public async findUser(): Promise<UsersEntity[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findUserById(id: string): Promise<UsersEntity> {
    try {
      return await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .getOne();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateUser(
    body: UserUpdateDTO,
    id: string
  ): Promise<UpdateResult | undefined> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, body);
      if (user.affected === 0) {
        return undefined;
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteUser(id: string): Promise<DeleteResult | undefined> {
    try {
      const user: DeleteResult = await this.userRepository.delete(id);
      if (user.affected === 0) {
        return undefined;
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
