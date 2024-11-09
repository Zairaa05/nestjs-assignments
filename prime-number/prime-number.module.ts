import { Module } from '@nestjs/common';
import { PrimeNumberController } from './prime-number.controller';
import { PrimeNumberService } from './prime-number.service';

@Module({
    controllers: [PrimeNumberController],
    providers: [PrimeNumberService]
})
export class PrimeNumberModule {}
