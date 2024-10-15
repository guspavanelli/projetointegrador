export class  ListaDoadoresDTO{
    constructor(
            readonly id: string, 
            readonly nome:string,
            readonly email: string
    ){}
}

export class ListagemDoadoresDTO{
    constructor(
        readonly doador : ListaDoadoresDTO[],
    ){}
}