import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./Endereco";
import { Foto } from "./Foto";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToMany(() => Foto, foto => foto.usuario, {eager: true})
    fotos: Foto[];

    @OneToOne(() => Endereco, endereco => endereco.usuario,
                 {cascade: true})
    @JoinColumn()
    endereco: Endereco;
}