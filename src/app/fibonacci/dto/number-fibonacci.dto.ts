import { ApiProperty } from '@nestjs/swagger';

export class NumberFibonacciDto {
  @ApiProperty()
  readonly number: number;
}
