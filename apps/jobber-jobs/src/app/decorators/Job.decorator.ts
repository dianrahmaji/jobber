import { applyDecorators, Injectable, SetMetadata } from '@nestjs/common';
import { JobMetadata } from '../interfaces/JobMetadata.interface';

export const JOB_METADATA_KEY = Symbol('job_meta');

export const Job = (meta: JobMetadata) =>
  applyDecorators(SetMetadata(JOB_METADATA_KEY, meta), Injectable());
