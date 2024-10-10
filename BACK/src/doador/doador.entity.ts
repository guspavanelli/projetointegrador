import { ListaDoadoresDTO } from "./dto/listaDoadores.dto";

export class DoadorEntity {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    senha: string;
    dataNascimento: Date;
    tipoSanguineo: string; 


    constructor(
        id: string,
        nome: string,
        email: string,
        telefone: string,
        senha: string,
        dataNascimento: Date,
        tipoSanguineo: string,
        
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.tipoSanguineo = tipoSanguineo;
    }
}
