import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import Produto from './produto.entity';

@Injectable()
export class ProdutoService {
    
    constructor(
        @InjectRepository(Produto)
        private repository: Repository<Produto>) { }
    
    save(produto: Produto){
        return this.repository.save(produto);
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

    update(produto: Produto){
        this.repository.update(produto.id, produto);
    }
}
