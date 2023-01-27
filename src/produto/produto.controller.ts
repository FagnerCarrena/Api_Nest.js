import { Controller, Body, Post, Get } from "@nestjs/common";
import {ProdutoRepository} from './produto.repository';
import { CriaProdutoDTO} from '../produto/dto/criaProduto.dto'
import { ProdutoEntity } from "./produto.entity";
import {v4 as uuid} from 'uuid'

@Controller('/produto')
export class ProdutoController{

    constructor(private produtoRepository: ProdutoRepository){

    }

@Post()
async criarProduto(@Body() dadosProduto: CriaProdutoDTO ){
    const produto = new ProdutoEntity()

    produto.id = uuid();
    produto.nome = dadosProduto.nome;
    produto.usuarioId = dadosProduto.usuarioId;
    produto.valor = dadosProduto.valor;
    produto.quantidade = dadosProduto.quantidade;
    produto.descricao = dadosProduto.descricao;
    produto.categoria = dadosProduto.categoria;
    produto.caracteristicas = dadosProduto.caracteristicas;
    produto.imagens = dadosProduto.imagens;

    const produtoCadastrado = this.produtoRepository.salvar(produto);
    return produtoCadastrado;

    }

@Get()
    async listarProduto(){
return this.produtoRepository.listar();

    }



} 