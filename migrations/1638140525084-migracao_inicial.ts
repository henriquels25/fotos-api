import {MigrationInterface, QueryRunner} from "typeorm";

export class migracaoInicial1638140525084 implements MigrationInterface {
    name = 'migracaoInicial1638140525084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "foto" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "usuario_id" integer, CONSTRAINT "PK_2496ab6b734626c5adcd6c0a37f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "endereco_id" integer, CONSTRAINT "REL_7227109ed06a73f9b83c2a3b24" UNIQUE ("endereco_id"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "endereco" ("id" SERIAL NOT NULL, "rua" character varying NOT NULL, "numero" integer NOT NULL, CONSTRAINT "PK_2a6880f71a7f8d1c677bb2a32a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "foto" ADD CONSTRAINT "FK_f5c5e9bec754881d0873335c087" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "FK_7227109ed06a73f9b83c2a3b240" FOREIGN KEY ("endereco_id") REFERENCES "endereco"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "FK_7227109ed06a73f9b83c2a3b240"`);
        await queryRunner.query(`ALTER TABLE "foto" DROP CONSTRAINT "FK_f5c5e9bec754881d0873335c087"`);
        await queryRunner.query(`DROP TABLE "endereco"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "foto"`);
    }

}
