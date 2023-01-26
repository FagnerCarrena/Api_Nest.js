import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import {usuarioRepository} from './usuario.Repository';

@Module({
    controllers:[UsuarioController],
    providers:[usuarioRepository]
})
export class UsuarioModule{}