import {MigrationInterface, QueryRunner} from "typeorm";

export class alteraColunaTipoData1638144385785 implements MigrationInterface {
    name = 'alteraColunaTipoData1638144385785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_nascimento"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_nascimento" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "data_nascimento"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "data_nascimento" TIMESTAMP`);
    }

}
