import { IsNotEmpty, IsString } from 'class-validator';

export class ProjectDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
