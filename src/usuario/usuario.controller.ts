import { Body, Controller, Get, Post } from '@nestjs/common';
import { criaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.Repository';
import {v4 as uuid} from 'uuid'
import { ListaUsuarioDTO } from './dto/listausuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { Delete, Param, Put } from '@nestjs/common/decorators';

@Controller('/usuarios')
export class UsuarioController { 
 
constructor(private usuarioRepository: UsuarioRepository ){

}
  @Post()
  async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senha = dadosUsuario.senha;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);
    
    return { usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      message: 'usuario criado com sucesso!'
    }
    
    }
    

  @Get()
  async listaUsuario(){

    const usuarioSalvos = await this.usuarioRepository.listarUsuarios();
    
    const usuarioListados = usuarioSalvos.map(
      usuario => new ListaUsuarioDTO(
        usuario.id,
        usuario.nome
      )
    );
return usuarioListados;

  }
  @Put('/:id')
async atualizaUsuario(@Param('id')  id: string, @Body() dados: AtualizaUsuarioDTO){
const usuarioAtualizado = await this.usuarioRepository.atualiza(id, dados);

return {
  usuario: usuarioAtualizado,
  message: 'Uasuario atualizado com sucesso',
}
} 
@Delete('/:id')
async removeUser(@Param('id') id: string){
const usuarioRemovido = await this.usuarioRepository.remove(id) 

return { 
  usuario: usuarioRemovido,
  message: 'usuário removido com sucesso'

}

}


}

