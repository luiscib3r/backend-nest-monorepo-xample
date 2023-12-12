import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { UsersInterface } from '../interfaces/users.interface';
import { ROLES } from '@company/lib-utils';
import { UsersProjectsEntity } from './users.projects.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements UsersInterface {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @OneToMany(() => UsersProjectsEntity, (usersProjects) => usersProjects.user)
  projectsIncludes: UsersProjectsEntity[];

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    username: string,
    password: string,
    role: ROLES,
    projectsIncludes: UsersProjectsEntity[]
  ) {
    super(id, createdAt, updatedAt);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role;
    this.projectsIncludes = projectsIncludes;
  }
}
