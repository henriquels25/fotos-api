import {MigrationInterface, QueryRunner} from "typeorm";

export class adicionaColunaIdade1638140609051 implements MigrationInterface {
    name = 'adicionaColunaIdade1638140609051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ADD "idade" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "idade"`);
    }

}
