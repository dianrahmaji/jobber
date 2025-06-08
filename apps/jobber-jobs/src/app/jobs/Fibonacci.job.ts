import { PulsarClient } from '@jobber/pulsar';
import { Job } from '../decorators/Job.decorator';
import { AbstractJob } from './Abstract.job';

@Job({
  name: 'fibonacci',
  description: 'Generate a fibonacci sequence and store it in the DB.',
})
export class FibonacciJob extends AbstractJob {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
