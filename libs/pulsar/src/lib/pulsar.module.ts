import { Module } from '@nestjs/common';
import { PulsarClient } from './Pulsar.client';

@Module({
  controllers: [],
  providers: [PulsarClient],
  exports: [PulsarClient],
})
export class PulsarModule {}
