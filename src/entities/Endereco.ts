import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Endereco {
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rua: string;

    @Column()
    numero: number;

    @OneToOne(() => Usuario, usuario => usuario.endereco)
    usuario: Usuario;


}