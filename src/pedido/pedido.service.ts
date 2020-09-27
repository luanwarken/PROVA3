import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import ItemPedido from 'src/item-pedido/item.pedido.entity';
import Produto from 'src/produto/produto.entity';
import { ProdutoService } from 'src/produto/produto.service';
import { Repository } from 'typeorm';
import Pedido from './pedido.entity';

@Injectable()
export class PedidoService {

    constructor(
        @InjectRepository(Pedido)
        private repository: Repository<Pedido>) { }
        
    save(pedido: Pedido){ 
        return this.repository.save(pedido);
    }

    findAll(){
        return this.repository.find();
    }

    findById(id: number){
        return this.repository.findOne(id);
    }

    delete(id: number){
        return this.repository.delete(id);
    }
    
}
