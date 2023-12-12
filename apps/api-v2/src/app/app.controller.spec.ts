import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Running some backend nest application called "API-V2" on port: 3001 using monorepo and devcontainer  😍"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message:
          'Running some backend nest application called "API-V2" on port: 3001 using monorepo and devcontainer  😍',
      });
    });
  });
});
