import { Module } from '@nestjs/common';
import { FibonacciSequenceController } from './fibonacci-sequence.controller';
import { FibonacciSequenceService } from './fibonacci-sequence.service';

@Module({
    controllers: [FibonacciSequenceController],
    providers: [FibonacciSequenceService]
})
export class FibonacciSequenceModule {}
