import { Module } from '@nestjs/common';
import { FibonacciJob } from './Fibonacci.job';

@Module({
  providers: [FibonacciJob],
})
export class JobsModule {}
