import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const CORS: CorsOptions = {
  origin: true,
  methods: 'HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
};
