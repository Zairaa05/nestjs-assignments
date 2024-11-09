import { Test, TestingModule } from '@nestjs/testing';
import { FactorialCalculatorService } from './factorial-calculator.service';

describe('FactorialCalculatorService', () => {
  let service: FactorialCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorialCalculatorService],
    }).compile();

    service = module.get<FactorialCalculatorService>(FactorialCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
