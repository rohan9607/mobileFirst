import { Test, TestingModule } from '@nestjs/testing';
import { MainAppController } from './main-app.controller';
import { MainAppService } from './main-app.service';

describe('MainAppController', () => {
  let controller: MainAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainAppController],
      providers: [MainAppService],
    }).compile();

    controller = module.get<MainAppController>(MainAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
