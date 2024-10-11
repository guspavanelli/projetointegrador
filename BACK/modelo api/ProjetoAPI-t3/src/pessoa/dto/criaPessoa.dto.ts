import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CriaPessoaDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    NOME: string;

    @IsString()
    @IsNotEmpty({message: "Descrição não pode ser vazio"})
    DESCRICAO: string;

    @IsDate()
    @IsNotEmpty({message: "Nascimento não pode ser vazio"})
    NASCIMENTO: Date;

    @IsString()
    @IsNotEmpty({message: "Pais não pode ser vazio"})
    PAIS: string;
}