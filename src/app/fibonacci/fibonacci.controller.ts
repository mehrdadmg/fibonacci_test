import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { FibonacciService } from './fibonacci.service';
import { NumberFibonacciDto } from './dto/number-fibonacci.dto';

@ApiTags('Fibonacci')
@Controller('fibonacci')
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  @ApiOperation({
    summary: 'Calculate a Fibonacci number',
  })
  @Post('input')
  create(@Body() numberFibonacciDto: NumberFibonacciDto) {
    return this.fibonacciService.create(numberFibonacciDto);
  }

  @Get('output/:ticket')
  findOne(@Param('ticket') ticket: number) {
    return this.fibonacciService.findOne(Number(ticket));
  }
}
