import { IsOptional, IsString } from 'class-validator';
export class ProjectUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
