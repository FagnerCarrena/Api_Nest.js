import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.Repository";

@Injectable()
@ValidatorConstraint({async:true})
export class emailEhUnicoValidator implements ValidatorConstraintInterface{

    constructor(private usuarioRepository: UsuarioRepository){

    }

    async validate(fagn: any, validationArguments?: ValidationArguments):  Promise<boolean> {
        const usuarioExiste = await this.usuarioRepository.existeComEmail(fagn);
        return !usuarioExiste
    }
}

export const EmailEhunico = (opcoesDeValidacao: ValidationOptions) =>{
return (objeto:Object, propriedade: string) => {
registerDecorator({
    target: objeto.constructor,
    propertyName: propriedade,
    options: opcoesDeValidacao,
    constraints: [],
    validator: emailEhUnicoValidator
})

}
}