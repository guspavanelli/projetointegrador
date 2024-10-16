import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import {v4  as uuid} from 'uuid'
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { DoadorEntity } from './doador.entity';
import { criaDoadorDTO } from './dto/Doador.dto';
import { alteraDoadorDTO } from './dto/alteraDadosDoador.dto';
import { ListaDoadoresDTO } from './dto/listaDoadores.dto';
import { RetornoDoadorDTO } from './dto/retornoDoador.dto';

@Injectable()
export class FilmeService {
  constructor(
    @Inject('DB_SANGUEBOM')
    private doadorRepository: Repository<DoadorEntity>,
  ) {}

  async listar(): Promise<ListaDoadoresDTO[]> {
    var doadoresListados = await this.doadorRepository.find();
    return doadoresListados.map(
      doador => new ListaDoadoresDTO(
          doador.id,
          doador.nome,
          doador.email,
      ))
        
  }

  

  async inserir(dados: criaDoadorDTO): Promise<RetornoDoadorDTO>{

   
    let doador = new DoadorEntity();
        filme.ID = uuid();
        filme.NOME = dados.NOME;
        filme.ANO = dados.ANO;
        filme.DURACAO = dados.DURACAO;
        filme.SINOPSE = dados.SINOPSE;
        filme.genero = await this.generoService.localizarNome(generoNome);

    return this.filmeRepository.save(filme)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: filme.ID,
        message: "Filme cadastrado!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        id: "",
        message: "Houve um erro ao cadastrar." + error.message
      };
    })

    
  }

  localizarID(ID: string): Promise<FILME> {
    return this.filmeRepository.findOne({
      where: {
        ID,
      },
    });
  }


  async remover(id: string): Promise<RetornoObjDTO> {
    const filme = await this.localizarID(id);
    
    return this.filmeRepository.remove(filme)
    .then((result) => {
      return <RetornoObjDTO>{
        return: filme,
        message: "Filme excluido!"
      };
    })
    .catch((error) => {
      return <RetornoObjDTO>{
        return: filme,
        message: "Houve um erro ao excluir." + error.message
      };
    });  
  }

  async alterar(id: string, dados: alteraFilmeDTO): Promise<RetornoCadastroDTO> {
    const filme = await this.localizarID(id);

    Object.entries(dados).forEach(
      async ([chave, valor]) => {
          if(chave=== 'id'){
              return;
          }

          if(chave === 'GENERO'){
            filme['GENERO'] = await this.generoService.localizarID(valor);
            return;
           }

          if (valor) 
           filme[chave] = valor;
          
      }
    )

    return this.filmeRepository.save(filme)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: filme.ID,
        message: "Filme alterado!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        id: "",
        message: "Houve um erro ao alterar." + error.message
      };
    });
  }
}