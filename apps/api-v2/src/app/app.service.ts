import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return {
      message:
        'Running some backend nest application called "API-V2" on port: 3001 using monorepo and devcontainer  😍',
    };
  }
}
