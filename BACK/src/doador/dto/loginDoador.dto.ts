import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class loginDoadorDTO{
    
    @IsEmail(undefined, {message: "email inválido"})
    email: string;

    @MinLength(8, {message: "senha deve ter no minimo 8 digitos"})
    senha:string;
    
}