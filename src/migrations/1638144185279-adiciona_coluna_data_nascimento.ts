import {MigrationInterface, QueryRunner} from "typeorm";

export class adicionaColunaDataNascimento1638144185279 implements MigrationInterface {
    name = 'adicionaColunaDataNascimento1638144185279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" RENAME COLUMN "idade" TO "data_nascimento"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_nascimento"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_nascimento" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_nascimento"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_nascimento" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuario" RENAME COLUMN "data_nascimento" TO "idade"`);
    }

}
