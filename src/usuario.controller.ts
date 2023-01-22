import { Body, Controller, Post } from '@nestjs/common';
import { usuarioRepository } from './usuario.Repository';

@Controller('/usuarios')
export class UsuarioController { 
 
private usuarioRepository = new usuarioRepository()

  @Post()
  async criaUsuario(@Body() dadosUsuario) {
    this.usuarioRepository.salvar(dadosUsuario);
    
      return dadosUsuario;
  }
}