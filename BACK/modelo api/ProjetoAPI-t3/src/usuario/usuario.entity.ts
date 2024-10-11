import * as bcrypt from 'bcrypt';

//classe de usuário, utilizado para manter padrão dos usuários armazenados
export class UsuarioEntity{
    id: string;
    nome: string;
    idade: number;
    cidade: string;
    email: string;
    telefone: string;
    assinatura: Date; 
    senha: string; 
    
    constructor(id: string,nome: string,idade: number,cidade: string,email: string,
                    telefone: string,assinatura: Date,senha: string){
        const saltOrRounds = 10;
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
        // this.senha = senha;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
        this.assinatura = assinatura; 
    }

    trocaSenha(senha){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha,saltOrRounds)
    }

    login(senha){
        return bcrypt.compareSync(senha,this.senha);
    }
}