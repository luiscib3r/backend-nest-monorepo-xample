import { ROLES } from '@company/lib-utils';
import { UserDTO } from '../user.dto';
export class userValidator {
  static validate(body: UserDTO) {
    const errors = [];
    if (!body.firstName) {
      errors.push('001', 'the name parameter is mandatory', 'name');
    }
    if (body.firstName.length < 0) {
      errors.push(
        errors.push(
          '002',
          'the length of the firstName parameter must be greater than 0',
          'firstName'
        )
      );
    }
    if (body.firstName.length > 256) {
      errors.push(
        errors.push(
          '001',
          'the length of the firstName parameter must be less than 256',
          'firstName'
        )
      );
    }
    if (!body.lastName) {
      errors.push(
        errors.push('001', 'the lastName parameter is mandatory', 'lastName')
      );
    }
    if (!body.username) {
      errors.push(
        errors.push('001', 'the username parameter is mandatory', 'username')
      );
    }
    if (!body.password) {
      errors.push(
        errors.push('001', 'the password parameter is mandatory', 'password')
      );
    }
    if (!body.age) {
      errors.push(errors.push('001', 'the age parameter is mandatory', 'age'));
    }
    if (!body.email) {
      errors.push(
        errors.push('001', 'the email parameter is mandatory', 'email')
      );
    }
    if (body.role.length === 0) {
      errors.push(
        errors.push('001', 'the role parameter is mandatory', 'role')
      );
    }
    if (body.role && !Object.values(ROLES).includes(body.role)) {
      errors.push(
        errors.push('001', 'the role parameter is mandatory', 'role')
      );
    }
    return {
      hasErrors: errors.length !== 0,
      errors: errors,
    };
  }
}
