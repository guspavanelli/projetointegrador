import { DOADOR } from "../doador.entity";

export class RetornoDoadorDTO{
    constructor(
        readonly status: string,
        readonly doador: DOADOR
        ){}
}