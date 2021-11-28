import {MigrationInterface, QueryRunner} from "typeorm";

export class adicionaIndiceNomeUsuario1638140823161 implements MigrationInterface {
    name = 'adicionaIndiceNomeUsuario1638140823161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_aa7d78895f0998f84649d3902c" ON "usuario" ("nome") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_aa7d78895f0998f84649d3902c"`);
    }

}
