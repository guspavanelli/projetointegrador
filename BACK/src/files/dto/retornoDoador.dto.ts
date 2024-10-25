
import { ApiPropertyOptional } from "@nestjs/swagger";

export class RetornoDoadorDTO{
    ID: string;
    message: string;
}

export class RetornoObjDTO{
    return: any;
    message: string;
}