import { error } from 'console';

export class projectValidator {
  static validate(name: string, description: string) {
    const errors = [];
    if (!name) {
      errors.push(error('001', 'the name parameter is mandatory', 'name'));
    }
    if (!description) {
      errors.push(
        error('001', 'the description parameter is mandatory', 'description')
      );
    }
    return {
      validation: errors.length !== 0,
      errors: errors,
    };
  }
}
