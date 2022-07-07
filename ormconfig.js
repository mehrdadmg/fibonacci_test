module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  autoLoadEntities: true,
  entities: ['dist/**/*.js'],
  synchronize: true,
  logging: false,
  migrations: ['./migration/**/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
};
