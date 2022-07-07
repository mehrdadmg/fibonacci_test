import { ApiProperty } from '@nestjs/swagger';

export class CreateFibonacciDto {
  @ApiProperty()
  readonly number: number;

  @ApiProperty()
  readonly fibonacci: string;
}
