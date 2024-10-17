import { ListaDoadoresDTO } from "./dto/listaDoadores.dto";
import * as bcrypt from 'bcrypt';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

export class DoadorEntity {

    @PrimaryColumn()
    ID: string;

    @Column({length: 255})
    NOME: string;

    @Column({length: 255})
    EMAIL: string;

    @Column({length: 255})
    TELEFONE: string;

    @Column({length: 255})
    SENHA: string;

    @Column({ type: 'date' })
    DATANASCIMENTO: Date;

    @Column({length: 255})
    TIPOSANGUINEO: string; 

    trocaSenha(senha){
        const saltOrRounds = 10;
        this.SENHA = bcrypt.hashSync(senha,saltOrRounds)
    }

    login(senha){
        return bcrypt.compareSync(senha,this.SENHA);
    }
}


