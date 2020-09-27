import Franqueado from "src/franqueado/franqueado.entity";
import ItemPedido from "src/item-pedido/item.pedido.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Pedido {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'codigo'})
    codigo: string;

    @Column({type : 'date', name: 'data'})
    data: Date;

    @Column({type : 'date', name: 'Data prevista de entrega'})
    dataEntregaPrevista: Date;

    @Column({name: 'transportadora'})
    transportadora: string;

    @Column({name: 'Valor total'})
    valorTotal: number;

    @Column({name: 'valores dos produtos'})
    valorProdutos: number;

    @Column({name: 'valor de desconto'})
    valorDescontos: number;

    @Column({name: 'endereço de entrega'})
    enderecoEntrega: string;

    @ManyToOne(type => Franqueado, franqueado => franqueado.id)
    @JoinColumn({name: 'cliente_id'})
    cliente: Franqueado;

    @OneToMany(type => ItemPedido, itens => itens.id, {cascade: true})
    itens: ItemPedido[];
    
}