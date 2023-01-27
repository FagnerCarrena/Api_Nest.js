import { IsString, IsNotEmpty,
     IsUrl, 
     IsNumber,
     Min,
     MaxLength,
     ArrayMinSize,
     IsArray,
     ValidateNested,
     IsUUID,
     
    
    } from "class-validator";
    import {Type} from 'class-transformer';


export class CaracteristicasProdutoDTO{

@IsNotEmpty({message: "o nome deve ser informado!"})   
@IsString()
nome: string;


@IsNotEmpty({message: "o descrição deve ser informada!"})   
@IsString()
descricao: string

}

export class ImageProductDTO{
 @IsUrl()   
url: string;

@IsString()
@IsNotEmpty({message: "o descrição deve ser informada!"}) 
descricao: string;

}

export class CriaProdutoDTO{

  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usuarioId: string;

@IsString()
@IsNotEmpty({message: "o nome deve ser informado!"})   
nome: string;


@IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
@Min(1, { message: 'O valor precisa ser maior que zero' })
valor: number;

@IsNumber()
@Min(0, { message: 'Quantidade mínima inválida' })
quantidade: number;


@IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
quantidadeDisponivel: number;


@IsString()
@IsNotEmpty({message: "a descricao deve ser informada!"}) 
@MaxLength(1000, {
    message: 'Descrição não pode ter mais que 1000 caracteres',
  })
descricao: string;

@ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => CaracteristicasProdutoDTO)
caracteristicas: CaracteristicasProdutoDTO[];

@ValidateNested()
@IsArray()
@ArrayMinSize(1)
@Type(() => ImageProductDTO)
imagens: ImageProductDTO[];


@IsString()
@IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
categoria: string;
}