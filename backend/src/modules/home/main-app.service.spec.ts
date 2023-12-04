import { Test, TestingModule } from '@nestjs/testing';
import { MainAppService } from './main-app.service';

describe('MainAppService', () => {
  let service: MainAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainAppService],
    }).compile();

    service = module.get<MainAppService>(MainAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
