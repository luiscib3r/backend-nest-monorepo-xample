export class UsersInterface {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
  password: string;
  role: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    username: string,
    password: string,
    role: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
