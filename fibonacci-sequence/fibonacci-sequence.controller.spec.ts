import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciSequenceController } from './fibonacci-sequence.controller';

describe('FibonacciSequenceController', () => {
  let controller: FibonacciSequenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibonacciSequenceController],
    }).compile();

    controller = module.get<FibonacciSequenceController>(FibonacciSequenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
