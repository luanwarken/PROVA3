import Pedido from "src/pedido/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Franqueado {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nome'})
    nome: string;

    @Column({name: 'cnpj'})
    cnpj: string;

    @Column({name: 'ie'})
    ie: string;

    @Column({name: 'endereco'})
    endereco: string;

    @Column({name: 'bairro'})
    bairro: string;

    @Column({name: 'cidade'})
    cidade: string;

    @Column({name: 'cep'})
    cep: string;
    
    @OneToMany(type => Pedido, pedidos => pedidos.id)
    pedidos: Pedido[];
}