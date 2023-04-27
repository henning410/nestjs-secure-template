import { Test, TestingModule } from '@nestjs/testing';
import { EvcsService } from './evcs.service';

describe('EvcsService', () => {
  let service: EvcsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvcsService],
    }).compile();

    service = module.get<EvcsService>(EvcsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
