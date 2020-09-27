import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import Produto from './produto.entity';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
 
    constructor(private readonly service: ProdutoService){}

    @Post()
    save(@Body()produto: Produto){
        return this.service.save(produto);
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id : number){
        return this.service.findById(id);
    }

    @Delete(":id")
    delete(@Param() id : number){
        return this.service.delete(id);
    }
}
