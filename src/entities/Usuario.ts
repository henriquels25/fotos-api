import { Column, Entity, JoinColumn, Index, OneToMany, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Endereco } from "./Endereco";
import { Foto } from "./Foto";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    nome: string;

    @Column('date', {name: "data_nascimento", nullable: true})
    dataNascimento: Date;

    @OneToMany(() => Foto, foto => foto.usuario, {eager: true})
    fotos: Foto[];

    @OneToOne(() => Endereco, endereco => endereco.usuario,
                 {cascade: true})
    @JoinColumn({ name: 'endereco_id' })  
    endereco: Endereco;

    @CreateDateColumn({name: 'data_criacao', type: 'timestamptz'})
    dataCriacao: Date; 

    @UpdateDateColumn({name: 'data_atualizacao', type: 'timestamptz'})
    dataAtualizacao: Date;
}