
import { IsEmail, MinLength, IsNotEmpty,IsString} from "class-validator";
import { EmailEhunico } from "src/usuario/validacao/email-eh-unico.validator";


export class criaUsuarioDTO{

 @IsString()   
 @IsNotEmpty({message: "o nome nao pode ser vazio"})
nome: string;

@IsEmail(undefined, {message:"email informado e inválido"})
@EmailEhunico({message: 'Já existe um usuario com este e-mail'})
email: string;

@MinLength(6, {message:" a senha deve ter no minino 6 digitos"})
senha: string;
}