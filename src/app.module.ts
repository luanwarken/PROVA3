import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FranqueadoController } from './franqueado/franqueado.controller';
import { FranqueadoService } from './franqueado/franqueado.service';
import { ProdutoService } from './produto/produto.service';
import { ProdutoController } from './produto/produto.controller';
import { PedidoController } from './pedido/pedido.controller';
import { PedidoService } from './pedido/pedido.service';
import Franqueado from './franqueado/franqueado.entity';
import Produto from './produto/produto.entity';
import Pedido from './pedido/pedido.entity';
import ItemPedido from './item-pedido/item.pedido.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'bruno1342',
    database: 'aare-web',
    entities: [ Franqueado, Produto, Pedido, ItemPedido ],
    synchronize: true,
    logging: true
  }),
  TypeOrmModule.forFeature([ Franqueado, Produto, Pedido, ItemPedido ])],
  controllers: [ AppController, FranqueadoController, ProdutoController, PedidoController ],
  providers: [ AppService, FranqueadoService, ProdutoService, PedidoService ],
})
export class AppModule {}
