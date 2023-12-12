import { UserDTO } from '../user.dto';

export class userFactory {
  static create(body: UserDTO) {
    return new UserDTO(
      body.firstName,
      body.lastName,
      body.age,
      body.username,
      body.password,
      body.email,
      body.role
    );
  }
}
