import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { ACCESS_LEVEL } from '@company/lib-utils';
import { UsersEntity } from './users.entity';
import { ProjectsEntity } from '../../projects/entities/projects.entity';

@Entity({ name: 'users_projects' })
export class UsersProjectsEntity extends BaseEntity {
  @Column({ type: 'enum', enum: ACCESS_LEVEL })
  accessLevel: ACCESS_LEVEL;

  /**
   * Se define una funcion (ManyToOne) que apunta hacia la entidad UsersEntity y realiza la relacion mediante
   * el atributo llamado projectsIncludes: UsersProjectsEntity[] que esta definido en la entidad UsersEntity
   */

  @ManyToOne(() => UsersEntity, (user) => user.projectsIncludes)
  user: UsersEntity;

  @ManyToOne(() => ProjectsEntity, (project) => project.usersIncludes)
  project: ProjectsEntity;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    accessLevel: ACCESS_LEVEL,
    user: UsersEntity,
    project: ProjectsEntity
  ) {
    super(id, createdAt, updatedAt);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.accessLevel = accessLevel;
    this.user = user;
    this.project = project;
  }
}
