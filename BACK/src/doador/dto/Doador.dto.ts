import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { ApiProperty } from "@nestjs/swagger";

export class criaDoadorDTO{
    @IsString()
    @IsNotEmpty({message: "nome não pode ser vazio"})
    @ApiProperty({
        example: "Felipe",
        description: "Nome do usuário, deve ser informado um texto contendo o nome"
    })
    nome: string;

    @EmailUnico({message: "Email repetido"})
    @IsEmail(undefined, {message: "email inválido"})
    @ApiProperty({
        example: "felipe@teste.com",
        description: "Email do usuário, deve ser informado um email válido e que não se repita"
    })
    email: string;

    @IsString()
    @ApiProperty({
        example: "1999999-9999",
        description: "Telefone do usuário, deve ser informado um texto apenas com os numeros do telefone"
    })
    telefone: string;

    @IsDateString({}, { message: 'Data deve estar no formato ISO 8601' })
    @ApiProperty({
        example: '2023-09-05T12:00:00Z',
        description: 'Data e hora no formato ISO 8601',
    })
    data?: string;

    @MinLength(6, {message: "senha deve ter no minimo 6 digitos"})
    @ApiProperty({
        example: "senha123",
        description: "Senha do usuário, deve ter pelo menos 6 digitos"
    })
    senha:string;

    @IsString()
    @ApiProperty({
        example: "A+, A-, B+, B-, AB+, AB-, O+, O-",
        description: "Tipo sanguineo deve ser informado"
    })
    tipoSanguineo: string;
}