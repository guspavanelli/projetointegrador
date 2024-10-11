//DTO responsável por receber dados de criação de um novo usuário
//DTO é "data transfer object" ou objeto de transferencia de dados, ou seja, é um tipo de classe para transferir dados

import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { ApiProperty } from "@nestjs/swagger";
import { SenhaForte } from "../validacao/strongpass.validator";

export class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "nome não pode ser vazio"})
    @ApiProperty({
        example: "Joao",
        description: "Nome do usuário, deve ser informado um texto contendo o nome"
    })
    nome: string;

    @EmailUnico({message: "Email repetido"})
    @IsEmail(undefined, {message: "email inválido"})
    @ApiProperty({
        example: "joao@teste.com",
        description: "Email do usuário, deve ser informado um email válido e que não se repita"
    })
    email: string;

    @MinLength(8, {message: "senha deve ter no minimo 8 digitos"})
    @ApiProperty({
        example: "Senha@444151241",
        description: "Senha do usuário, deve ter pelo menos 8 digitos, tendo numeros, letras e caracteres especiais"
    })
    @SenhaForte({message:"Senha deve ter complexidade maior. Está muito fraca"})
    senha:string;
    
    @IsNumber()
    @ApiProperty({
        example: "1990",
        description: "Ano de nascimento do usuário, deve ser informado como Numero(number)"
    })
    idade: number;

    @IsString()
    @ApiProperty({
        example: "Bauru",
        description: "Cidade do usuário, deve ser informado um texto com a cidade"
    })
    cidade: string;

    @IsString()
    @ApiProperty({
        example: "12123412349",
        description: "Telefone do usuário, deve ser informado um texto apenas com os numeros do telefone"
    })
    telefone: string;
}