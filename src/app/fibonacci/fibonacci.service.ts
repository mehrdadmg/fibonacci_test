import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFibonacciDto } from './dto/create-fibonacci.dto';
import { NumberFibonacciDto } from './dto/number-fibonacci.dto';
import { Fibonacci } from './entities/fibonacci.entity';

@Injectable()
export class FibonacciService {
  constructor(
    @InjectRepository(Fibonacci)
    private resumeFibonacci: Repository<Fibonacci>,
  ) {}

  async create(numberFibonacciDto: NumberFibonacciDto) {
    const number = numberFibonacciDto.number;

    /* let n1 = 0;
    let n2 = 1;
    let nextTerm: any;
    if (number >= 4) {
      for (let i = 2; i < number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        console.log(n2);
      }
    } else {} */
    try {
      const oldFibonacci = await this.resumeFibonacci.findOneBy({
        number: number,
      });
      if (oldFibonacci && oldFibonacci.fibonacci) {
        return { ticket: oldFibonacci.id };
      }
      const fibonacciOfNumber = BigInt(
        Math.round(
          (Math.pow((1 + Math.sqrt(5)) / 2, number - 1) -
            Math.pow((1 - Math.sqrt(5)) / 2, number - 1)) /
            Math.sqrt(5),
        ),
      );
      const createFibonacciDto: CreateFibonacciDto = {
        number: number,
        fibonacci: String(fibonacciOfNumber),
      };

      const newFibonacci = this.resumeFibonacci.create(createFibonacciDto);
      await this.resumeFibonacci.save(newFibonacci);

      return { ticket: newFibonacci.id };
    } catch {
      throw new HttpException(
        "Fibonacci bigger than BigInt or Number isn't an integer",
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }

  async findOne(id: number) {
    const fibonacci = await this.resumeFibonacci.findOneBy({ id: id });
    if (fibonacci && fibonacci.fibonacci) {
      return fibonacci.fibonacci;
    }
    throw new HttpException('Fibonacci not found', HttpStatus.NOT_FOUND);
  }
}
