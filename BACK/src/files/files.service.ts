import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FILES } from "./files.entity";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { Request } from 'express';

@Injectable()
export class FilesService{
    constructor(
        @Inject('FILES_REPOSITORY')
        private filesRepository: Repository<FILES>
    ) {}


    async salvarDados(file: Express.Multer.File, req: Request){
        const arquivo = new FILES();

        var nome = file.filename.split('_id_');

        arquivo.ID = nome[0];
        arquivo.FILENAME = file.originalname;
        arquivo.CONTENTLENGHT= file.size;
        arquivo.CONTENTTYPE = file.mimetype;
        arquivo.URL = `$(file.filename)`;

        return this.filesRepository.save(arquivo)
        .then((result)=>{
            return <RetornoCadastroDTO>{
                id: arquivo.ID,
                message: "arquivo inserido!"
            };
        })
        .catch((error)=> {
            return <RetornoCadastroDTO> {
                id: "",
                message: "houve um erro ao cadastrar" + error.message
            };
        })
    }



asyncValidaArquivo(ID: string){
    const possivelArquivo = this.filesRepository.findOne(
        {where:
            {ID}
        }

    );

    return (possivelArquivo!==undefined)
}

async localicar(ID: string){
    const possivelArquivo = await this.filesRepository.findOne(
        {where:
            {ID}
        }
    );
    return possivelArquivo
}


}