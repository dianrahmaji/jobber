import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Job } from './models/Job.model';
import { JobsService } from './Jobs.service';
import { ExecuteJobInput } from './dto/ExecuteJob.dto';

@Resolver()
export class JobsResolver {
  constructor(private readonly jobsService: JobsService) {}

  @Query(() => [Job], { name: 'jobs' })
  async getJobs() {
    return this.jobsService.getJobs();
  }

  @Mutation(() => Job)
  async executeJob(@Args('executeJobInput') executeJobInput: ExecuteJobInput) {
    return this.jobsService.executeJob(executeJobInput.name);
  }
}
