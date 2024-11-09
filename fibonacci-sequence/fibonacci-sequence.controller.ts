import { BadRequestException, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('fibonacci-sequence')
export class FibonacciSequenceController {
    /*
    GET /fibonacci-sequence
    GET /fibonacci-sequence/:id
    POST /fibonacci-sequence
    PATCH /fibonnacci-sequence/:id
    DELETE /fibonacci-sequence/:id
    */

    

    @Get(':n') // Ensure this is correct
    generateFibonacci(@Param('n') n: string): { sequence: number[] } {
        const numberN = parseInt(n, 10);
        
        const sequence = this.fibonacci(numberN);
        return { sequence };
    }

    private fibonacci(n: number): number[] {
        const sequence: number[] = [];
        let a = 0, b = 1;

        for (let i = 0; i < n; i++) {
            sequence.push(a);
            const next = a + b;
            a = b;
            b = next;
        }

        return sequence;
    }
}
