import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciSequenceService } from './fibonacci-sequence.service';

describe('FibonacciSequenceService', () => {
  let service: FibonacciSequenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibonacciSequenceService],
    }).compile();

    service = module.get<FibonacciSequenceService>(FibonacciSequenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
