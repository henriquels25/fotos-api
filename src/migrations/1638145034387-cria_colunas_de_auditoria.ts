import {MigrationInterface, QueryRunner} from "typeorm";

export class criaColunasDeAuditoria1638145034387 implements MigrationInterface {
    name = 'criaColunasDeAuditoria1638145034387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_atualizacao" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_atualizacao"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_criacao"`);
    }

}
