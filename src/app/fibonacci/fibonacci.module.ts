import { Module } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { FibonacciController } from './fibonacci.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fibonacci } from './entities/fibonacci.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fibonacci])],
  controllers: [FibonacciController],
  providers: [FibonacciService],
  exports: [TypeOrmModule],
})
export class FibonacciModule {}
