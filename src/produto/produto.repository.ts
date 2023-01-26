import{Injectable} from '@nestjs/common';


@Injectable()
export class ProdutoRepository{
private produto = [];

salvar(product){
this.produto.push(product);



}

listar(){
return this.produto;

}



}