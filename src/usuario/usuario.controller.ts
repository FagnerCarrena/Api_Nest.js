import { Body, Controller, Get, Post } from '@nestjs/common';
import { criaUsuarioDTO } from 'src/dto/criaUsario.dto';
import { usuarioRepository } from './usuario.Repository';

@Controller('/usuarios')
export class UsuarioController { 
 
constructor(private usuarioRepository: usuarioRepository ){


}


  @Post()
  async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO) {
    this.usuarioRepository.salvar(dadosUsuario);
    
      return dadosUsuario;
  }

  @Get()
  async listaUsuario(){
return this.usuarioRepository.listarUsuarios();

  }


}

