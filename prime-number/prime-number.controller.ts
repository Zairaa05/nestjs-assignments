import { BadRequestException, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('prime-number')
export class PrimeNumberController {
    @Get(':n')
    checkPrime(@Param('n') n: string): { isPrime: boolean } {
        const numberN = parseInt(n, 10);
        if (isNaN(numberN) || numberN < 1) {
            throw new BadRequestException('Please provide a valid positive integer for n.');
        }
        const isPrime = this.isPrime(numberN);
        return { isPrime };
    }

    private isPrime(num: number): boolean {
        if (num < 2) return false; // 0 and 1 are not prime numbers
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true; // num is prime
    }
}
