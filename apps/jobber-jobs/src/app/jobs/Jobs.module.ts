import { Module } from '@nestjs/common';
import { FibonacciJob } from './Fibonacci.job';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { JobsService } from './Jobs.service';
import { JobsResolver } from './Jobs.resolver';

@Module({
  imports: [DiscoveryModule],
  providers: [FibonacciJob, JobsService, JobsResolver],
})
export class JobsModule {}
