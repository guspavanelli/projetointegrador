import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { ApiProperty } from "@nestjs/swagger";
import { SenhaForte } from "../validacao/strongpass.validator";

export class criaDoadorDTO{
    trocaSenha(senha: any): any {
        throw new Error("Method not implemented.");
    }
    @IsString()
    @IsNotEmpty({message: "nome não pode ser vazio"})
    @ApiProperty({
        example: "Felipe",
        description: "Nome do usuário, deve ser informado um texto contendo o nome"
    })
    NOME: string;

    @EmailUnico({message: "Email repetido"})
    @IsEmail(undefined, {message: "email inválido"})
    @ApiProperty({
        example: "felipe@teste.com",
        description: "Email do usuário, deve ser informado um email válido e que não se repita"
    })
    EMAIL: string;

    @IsString()
    @ApiProperty({
        example: "1999999-9999",
        description: "Telefone do usuário, deve ser informado um texto apenas com os numeros do telefone"
    })
    TELEFONE: string;

    @IsString()
    @ApiProperty({
        example: '2023-09-05T12:00:00Z',
        description: 'Data e hora no formato ISO 8601',
    })
    DATA: string;

    @MinLength(8, {message: "senha deve ter no minimo 8 digitos"})
    @ApiProperty({
        example: "Senha@444151241",
        description: "Senha do usuário, deve ter pelo menos 8 digitos, tendo numeros, letras e caracteres especiais"
    })
    @SenhaForte({message:"Senha deve ter complexidade maior. Está muito fraca"})
    SENHA:string;

    @IsString()
    @ApiProperty({
        example: "A+, A-, B+, B-, AB+, AB-, O+, O-",
        description: "Tipo sanguineo deve ser informado"
    })
    TIPOSANGUINEO: string;
}
