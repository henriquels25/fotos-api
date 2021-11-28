import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Foto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => Usuario)
    usuario: Promise<Usuario>;
}