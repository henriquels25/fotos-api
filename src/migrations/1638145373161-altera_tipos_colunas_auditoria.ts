import {MigrationInterface, QueryRunner} from "typeorm";

export class alteraTiposColunasAuditoria1638145373161 implements MigrationInterface {
    name = 'alteraTiposColunasAuditoria1638145373161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_criacao"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_criacao" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_atualizacao"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_atualizacao" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_atualizacao"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_atualizacao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_criacao"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
