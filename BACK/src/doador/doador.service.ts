import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import {v4  as uuid} from 'uuid'
import { DoadorEntity } from './doador.entity';
import { criaDoadorDTO } from './dto/Doador.dto';
import { alteraDoadorDTO } from './dto/alteraDadosDoador.dto';
import { ListaDoadoresDTO } from './dto/listaDoadores.dto';
import { RetornoCadastroDTO, RetornoObjDTO } from './dto/retornoDoador.dto';

@Injectable()
export class DoadorService {
  constructor(
    @Inject('DOADOR_REPOSITORY')
    private doadorRepository: Repository<DoadorEntity>,
  ) {}

  async listar(): Promise<ListaDoadoresDTO[]> {
    var doadoresListados = await this.doadorRepository.find();
    return doadoresListados.map(
      doador => new ListaDoadoresDTO(
          doador.ID,
          doador.NOME,
          doador.EMAIL,
      ))
  }
  async inserir(dados: criaDoadorDTO): Promise<RetornoCadastroDTO>{
    let doador = new DoadorEntity();
        doador.ID = uuid();
        doador.NOME = dados.NOME;
        doador.EMAIL = dados.EMAIL;
        doador.TELEFONE = dados.TELEFONE;
        doador.trocaSenha(dados.SENHA);
        doador.DATANASCIMENTO = dados.data;
        doador.TIPOSANGUINEO = dados.TIPOSANGUINEO;

    return this.doadorRepository.save(doador)
    .then((result) => {
      return <RetornoCadastroDTO>{
        ID: doador.ID,
        message:"Doador Inserido"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        ID: "",
        message: "Erro ao Criar Cadastro" + error.message
      };
    })
  }

  localizarID(ID: string): Promise<DoadorEntity> {
    return this.doadorRepository.findOne({
      where: {
        ID,
      },
    });
  }

  async remover(ID: string): Promise<RetornoObjDTO> {
    const doador = await this.localizarID(ID);
    
    return this.doadorRepository.remove(doador)
    .then((result) => {
      return <RetornoObjDTO>{
        return: doador,
        message: "Doador excluido!"
      };
    })
    .catch((error) => {
      return <RetornoObjDTO>{
        return: doador,
        message: "Houve um erro ao excluir." + error.message
      };
    });  
  }

  async alterar(ID: string, dados: alteraDoadorDTO): Promise<RetornoCadastroDTO> {
    const doador = await this.localizarID(ID);
    Object.entries(dados).forEach(
      async ([chave, valor]) => {
          if(chave=== 'ID'){
              return;
          } 
          if (valor) 
           doador[chave] = valor;
          
      }
    )
    return this.doadorRepository.save(doador)
    .then((result) => {
      return <RetornoCadastroDTO>{
        ID:doador.ID,
        message: "Doador Alterado"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        ID:"",
        message: "Erro ao alterar dados" + error.message
      };
    });
  }
}