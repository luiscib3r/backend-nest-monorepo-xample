import { ProjectDTO } from '../project.dto';

export class projectFactory {
  static factoryMethod(name: string, description: string) {
    return new ProjectDTO(name, description);
  }
}
