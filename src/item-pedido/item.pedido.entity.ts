import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import Produto from 'src/produto/produto.entity';
import Pedido from "src/pedido/pedido.entity";

@Entity()
export default class ItemPedido {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Quantidade'})
    quantidade: number;

    @Column({name: 'Valor por unidade'})
    valorUnitario: number;

    @Column({name: 'valor de desconto'})
    totalDesconto: number;

    @Column({name: 'total'})
    valorTotal: number;

    @ManyToOne(type => Produto, produto => produto.id)
    @JoinColumn({name: 'produto_id'})
    produto: Produto;

    @ManyToOne(type => Pedido, pedido => pedido.id)
    @JoinColumn({name: 'pedido_id'})
    pedido: Pedido;

}