
import { DoadorEntity } from "../doador.entity";

export class RetornoDoadorDTO{
    constructor(
        readonly status: string,
        readonly cadastro: DoadorEntity
        ){}
}