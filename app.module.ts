import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciSequenceModule } from './fibonacci-sequence/fibonacci-sequence.module';
import { PrimeNumberModule } from './prime-number/prime-number.module';
import { FactorialCalculatorModule } from './factorial-calculator/factorial-calculator.module';

@Module({
  imports: [FibonacciSequenceModule, PrimeNumberModule, FactorialCalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
