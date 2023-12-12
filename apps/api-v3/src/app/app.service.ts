import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return {
      message:
        'Running some backend nest application called "API-V3" on port: 3002 using monorepo and devcontainer  😍',
    };
  }
}
