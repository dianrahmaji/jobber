import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JobsModule } from './jobs/Jobs.module';

@Module({
  imports: [ConfigModule, JobsModule],
})
export class AppModule {}
