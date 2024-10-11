import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, IsDateString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class alteraDoadorDTO {

    @IsString()
    @IsNotEmpty({ message: "nome não pode ser vazio" })
    @IsOptional()
    @ApiPropertyOptional({
        example: "Felipe",
        description: "Nome do usuário, deve ser informado um texto contendo o nome"
    })
    public nome: string;

    @EmailUnico({ message: "Email repetido" })
    @IsEmail(undefined, { message: "email inválido" })
    @IsOptional()
    @ApiPropertyOptional({
        example: "felipe@teste.com",
        description: "Email do usuário, deve ser informado um email válido e que não se repita"
    })
    public email: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "1999999-9999",
        description: "Telefone do usuário, deve ser informado um texto apenas com os números do telefone"
    })
    public telefone: string;

    @IsOptional()
    @IsDateString({}, { message: 'Data deve estar no formato ISO 8601' })
    @ApiPropertyOptional({
        type: String,
        example: '2023-09-05T12:00:00Z',
        description: 'Data e hora no formato ISO 8601',
    })
    public data?: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "A+, A-, B+, B-, AB+, AB-, O+, O-",
        description: "Tipo sanguíneo deve ser informado"
    })
    public tipoSanguineo: string;
}
