import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fibonacci } from './app/fibonacci/entities/fibonacci.entity';

import { FibonacciModule } from './app/fibonacci/fibonacci.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      entities: [Fibonacci],
      synchronize: true,
      logging: false,
      migrations: ['./migration/**/*.js'],
    }),
    FibonacciModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
