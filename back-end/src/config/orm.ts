import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  type: `sqlite`,
  database: `data/db.sqlite`,
  logging: true,
  entities: [path.resolve(__dirname, `..`, `db`, `models`, `*`)],
  migrations: ['src/migration/**/*.ts'],
};

module.exports = options;
