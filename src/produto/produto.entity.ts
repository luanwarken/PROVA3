import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Produto {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nome'})
    nome: string;
    
    @Column({name: 'descricao'})
    descricao: string;
    
    @Column({name: 'preco'})
    preco: number;
    
    @Column({name: 'estoque'})
    estoque: number;

    @Column({type : 'date', name: 'data-de-validade'})
    dataValidade: Date;
    
    @Column({name: 'unidade-de-medida'})
    unidadeMedida: string;

    @Column({name: 'imagem'})
    imagem: string;

}