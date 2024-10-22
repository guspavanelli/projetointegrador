import { Column, Entity, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity() // Adicione este decorador
export class DOADOR {

    

    @PrimaryColumn()
    ID: string;

    @Column({ length: 255 })
    NOME: string;

    @Column({ length: 255 })
    EMAIL: string;

    @Column({ length: 255 })
    TELEFONE: string;

    @Column({ length: 255 })
    SENHA: string;

    @Column({ length: 255 })
    DATANASCIMENTO: string;

    @Column({ length: 255 })
    TIPOSANGUINEO: string;

    trocaSenha(senha) {
        const saltOrRounds = 10;
        this.SENHA = bcrypt.hashSync(senha, saltOrRounds);
    }

    login(senha) {
        return bcrypt.compareSync(senha, this.SENHA);
    }
}
