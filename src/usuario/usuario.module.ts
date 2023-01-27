import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import {UsuarioRepository} from './usuario.Repository';
import { emailEhUnicoValidator } from "./validacao/email-eh-unico.validator";

@Module({
    controllers:[UsuarioController],
    providers:[UsuarioRepository, emailEhUnicoValidator]
})
export class UsuarioModule{}