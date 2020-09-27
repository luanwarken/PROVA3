import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import Pedido from './pedido.entity';
import { PedidoService } from './pedido.service';

@Controller('pedido')
export class PedidoController {
    
    constructor(private readonly service: PedidoService){}

    @Post()
    save(@Body()pedido: Pedido){
        return this.service.save(pedido);
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
