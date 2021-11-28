import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Foto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    url: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;
}