import { ApiPropertyOptional } from "@nestjs/swagger";


export class RetornoCadastroDTO{
    id: string;
    message: string;
}

export class RetornoObjDTO{
    return: any;
    message: string;
}