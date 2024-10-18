import { Injectable } from "@nestjs/common";
import { DOADOR } from "./doador.entity";
import { alteraDoadorDTO } from "./dto/alteraDadosDoador.dto";
import Datas from "src/doador/utils/data";

@Injectable()
export class DoadoresArmazenados{
    #cadastros: DOADOR[] = []; 
    objDatas: Datas;  
    AdicionarCadastro(cadastro: DOADOR){
        this.#cadastros.push(cadastro);
        this.objDatas = new Datas();
    }
    async removeCadastro(id:string){
        const cadastro = this.pesquisaId(id);

        this.#cadastros = this.#cadastros.filter(
            cadastroSalvo => cadastroSalvo.ID !== id
        )

        return cadastro
    }
    pesquisaEmail(email:string){
        const possivelCadastro = this.#cadastros.find(
            cadastro => cadastro.EMAIL == email
        )
        return possivelCadastro;
    }    
    pesquisaId(id:string){
        const possivelCadastro = this.#cadastros.find(
            cadastroSalvo => cadastroSalvo.ID === id
        );

        if(!possivelCadastro){
            throw new Error('Cadastro não encontrado');
        }

        return possivelCadastro
    }

    alteraCadastro(id:string,dadosNovos: alteraDoadorDTO){
        const cadastro = this.pesquisaId(id);
        Object.entries(dadosNovos).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }else if(chave === 'senha'){
                    cadastro.trocaSenha(valor)
                }else{
                    //caso não seja nenhum campo especial, é feito só a alteração direta do valor do campo com base no valor passado 
                    cadastro[chave] = valor;
                }
            }
        )

        return cadastro;
        
    }
    validaEmail(emailNovo: string){
        const possivelCadastro = this.pesquisaEmail(emailNovo)
        
        return (possivelCadastro === undefined)
    }
    Login(email:string ,senha:string){
        const possivelCadastro = this.pesquisaEmail(email)
        if (possivelCadastro){
            return {
                cadastro: possivelCadastro.login(senha)?possivelCadastro:null,
                status: possivelCadastro.login(senha)
            };
        }else{
            return {
                cadastro: null,
                status: false
            };
        }
    }
    get Cadastros(){        
        return this.#cadastros;
    }
}