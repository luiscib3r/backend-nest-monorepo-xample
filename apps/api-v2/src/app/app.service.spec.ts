import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Running some backend nest application called "API-V2" on port: 3001 using monorepo and devcontainer  😍"', () => {
      expect(service.getData()).toEqual({
        message:
          'Running some backend nest application called "API-V2" on port: 3001 using monorepo and devcontainer  😍',
      });
    });
  });
});
