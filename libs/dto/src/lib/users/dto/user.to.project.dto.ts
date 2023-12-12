import { ACCESS_LEVEL } from '@company/lib-utils';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UsersEntity } from '../entities/users.entity';
import { ProjectsEntity } from '../../projects/entities/projects.entity';

export class UserToProjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user: UsersEntity;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  project: ProjectsEntity;

  @ApiProperty({ enum: ACCESS_LEVEL })
  type: ACCESS_LEVEL;
  @IsNotEmpty()
  //@IsEnum(ACCESS_LEVEL)
  accessLevel: ACCESS_LEVEL;

  constructor(
    user: UsersEntity,
    project: ProjectsEntity,
    type: ACCESS_LEVEL,
    accessLevel: ACCESS_LEVEL
  ) {
    this.user = user;
    this.project = project;
    this.type = type;
    this.accessLevel = accessLevel;
  }
}
