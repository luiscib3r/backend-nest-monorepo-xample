import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { ProjectsInterface } from '../interfaces/projects.interface';
import { UsersProjectsEntity } from '../../users/entities/users.projects.entity';

@Entity({ name: 'projects' })
export class ProjectsEntity extends BaseEntity implements ProjectsInterface {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(
    () => UsersProjectsEntity,
    (usersProjects) => usersProjects.project
  )
  usersIncludes: UsersProjectsEntity[];

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    name: string,
    description: string,
    usersIncludes: UsersProjectsEntity[]
  ) {
    super(id, createdAt, updatedAt);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.name = name;
    this.description = description;
    this.usersIncludes = usersIncludes;
  }
}
