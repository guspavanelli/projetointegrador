//classe para criação de validator e decorator para validação de email unico
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosArmazenados } from "../usuario.dm";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async:true})
//criação da classe com base na interface de validator
export class emailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private Usuarios : UsuariosArmazenados){

    }
    //função de validação, onde é feita a chamada da validação do email unico
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const validarEmail = await this.Usuarios.validaEmail(value);
        return validarEmail;
    }    
}

//export de decorator, para uso do decorator basta usar o nome "EmailUnico"
export const EmailUnico = (opcoesValidacao: ValidationOptions) => {
    return (objeto : Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: emailUnicoValidator
        })
    }
}