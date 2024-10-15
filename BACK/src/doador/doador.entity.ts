import { ListaDoadoresDTO } from "./dto/listaDoadores.dto";
import * as bcrypt from 'bcrypt';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

export class DoadorEntity {
    @PrimaryColumn()
    id: string;

    @Column({length: 255})
    nome: string;

    @Column({length: 255})
    email: string;

    @Column({length: 255})
    telefone: string;

    @Column({length: 255})
    senha: string;

    @Column({ type: 'date' })
    dataNascimento: Date;

    @Column({length: 255})
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
        const saltOrRounds = 10;
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
        this.dataNascimento = dataNascimento;
        this.tipoSanguineo = tipoSanguineo;
    }

    trocaSenha(senha){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha,saltOrRounds)
    }

    login(senha){
        return bcrypt.compareSync(senha,this.senha);
    }
}


