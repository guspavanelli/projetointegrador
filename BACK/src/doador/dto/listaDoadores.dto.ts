export class  ListaDoadoresDTO{
    constructor(
            readonly ID: string, 
            readonly NOME:string,
            readonly EMAIL: string
    ){}
}

export class ListagemDoadoresDTO{
    constructor(
        readonly doador : ListaDoadoresDTO[],
    ){}
}