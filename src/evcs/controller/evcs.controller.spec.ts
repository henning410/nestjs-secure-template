import { Test, TestingModule } from '@nestjs/testing';
import { EvcsController } from './evcs.controller';

describe('EvcsController', () => {
  let controller: EvcsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvcsController],
    }).compile();

    controller = module.get<EvcsController>(EvcsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
