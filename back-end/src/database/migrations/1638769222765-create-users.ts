import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1638769222765 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: `ìd`,
        type: `integer`,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: `increment`,
      },
      {
        name: `email`,
        type: `varchar`,
        length: `255`,
        isUnique: true,
      },
      {
        name: `create_at`,
        type: `timestamptz`,
        isNullable: false,
        default: `now()`,
      },
      {
        name: `update_at`,
        type: `timestamptz`,
        isNullable: false,
        default: `now()`,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
