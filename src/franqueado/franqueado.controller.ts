import Franqueado from 'src/franqueado/franqueado.entity';
import { FranqueadoService } from './franqueado.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('franqueado')
export class FranqueadoController {
    
    constructor(private readonly service: FranqueadoService){}

    @Post()
    save(@Body()franqueado: Franqueado){
        return this.service.save(franqueado);
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
