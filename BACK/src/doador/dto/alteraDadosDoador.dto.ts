import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, IsDateString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SenhaForte } from "../validacao/strongpass.validator";

export class alteraDoadorDTO {

    @IsString()
    @IsNotEmpty({ message: "nome não pode ser vazio" })
    @IsOptional()
    @ApiPropertyOptional({
        example: "Felipe",
        description: "Nome do usuário, deve ser informado um texto contendo o nome"
    })
    public NOME: string;

    @EmailUnico({ message: "Email repetido" })
    @IsEmail(undefined, { message: "email inválido" })
    @IsOptional()
    @ApiPropertyOptional({
        example: "felipe@teste.com",
        description: "Email do usuário, deve ser informado um email válido e que não se repita"
    })
    public EMAIL: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "1999999-9999",
        description: "Telefone do usuário, deve ser informado um texto apenas com os números do telefone"
    })
    public TELEFONE: string;

    @IsOptional()
    @IsDateString({}, { message: 'Data deve estar no formato ISO 8601' })
    @ApiPropertyOptional({
        type: String,
        example: '2023-09-05T12:00:00Z',
        description: 'Data e hora no formato ISO 8601',
    })
    public DATA: string;

    @MinLength(8, {message: "senha deve ter no minimo 8 digitos"})
    @ApiPropertyOptional({
        example: "Senha@444151241",
        description: "Senha do usuário, deve ter pelo menos 8 digitos, tendo numeros, letras e caracteres especiais"
    })
    @IsOptional()
    @SenhaForte({message:"Senha deve ter complexidade maior. Está muito fraca"})
    SENHA:string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "A+, A-, B+, B-, AB+, AB-, O+, O-",
        description: "Tipo sanguíneo deve ser informado"
    })
    public TIPOSANGUINEO: string;
}
