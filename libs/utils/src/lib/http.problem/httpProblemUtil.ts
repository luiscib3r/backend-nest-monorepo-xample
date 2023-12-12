import { HttpStatus } from '@nestjs/common';

export class HttpProblemUtil {
  static createProblem(
    errors: [],
    options: { status: HttpStatus; title: string; detail: string }
  ) {
    return {
      status: options.status,
      title: options.title,
      detail: options.detail,
      traceId: 'n.id',
      errors: errors,
    };
  }
}
