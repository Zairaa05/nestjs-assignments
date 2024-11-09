import { Module } from '@nestjs/common';
import { FactorialCalculatorController } from './factorial-calculator.controller';
import { FactorialCalculatorService } from './factorial-calculator.service';

@Module({
  controllers: [FactorialCalculatorController],
  providers: [FactorialCalculatorService]
})
export class FactorialCalculatorModule {}
