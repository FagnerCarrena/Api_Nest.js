import { Controller, Body, Post, Get } from "@nestjs/common";
import {ProdutoRepository} from './produto.repository';
import {CaracteristicasProdutoDTO, CriaProdutoDTO} from '../produto/dto/criaProduto.dto'

@Controller('/produto')
export class ProdutoController{

    constructor(private produtoRepository: ProdutoRepository){

    }

@Post()
async criarProduto(@Body() dadosProduto: CriaProdutoDTO ){
this.produtoRepository.salvar(dadosProduto);

return dadosProduto;

    }

@Get()
    async listarProduto(){
return this.produtoRepository.listar();

    }



} 