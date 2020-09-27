import Franqueado from 'src/franqueado/franqueado.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';

@Injectable()
export class FranqueadoService {
    
    constructor(
        @InjectRepository(Franqueado)
        private repository: Repository<Franqueado>) { }
    
    save(franqueado: Franqueado){
        return this.repository.save(franqueado);
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
