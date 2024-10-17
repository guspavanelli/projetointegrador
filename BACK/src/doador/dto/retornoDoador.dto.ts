
import { ApiPropertyOptional } from "@nestjs/swagger";

export class RetornoCadastroDTO{
    ID: string;
    message: string;
}

export class RetornoObjDTO{
    return: any;
    message: string;
}