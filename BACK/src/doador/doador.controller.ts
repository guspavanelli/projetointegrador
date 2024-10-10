import { criaDoadorDTO } from "./dto/Doador.dto";
import { DoadorEntity } from "./doador.entity";
import {v4  as uuid} from 'uuid'
import { DoadoresArmazenados } from "./doador.dm";
import { RetornoDoadorDTO } from "./dto/retornoDoador.dto";
import { ListagemDoadoresDTO, ListaDoadoresDTO } from "./dto/listaDoadores.dto";
import { loginDoadorDTO } from "./dto/loginDoador.dto";
import { alteraDoadorDTO } from "./dto/alteraDadosDoador.dto";
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { promises } from "dns";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import Datas from "src/doador/utils/data";

@ApiTags('doador')
@Controller('/doadores')
export class DoadorController{

    objDatas: Datas;
    //controller com injeção de dependencia da classe de usuários armazenados
    constructor(private Doador : DoadoresArmazenados){
        this.objDatas = new Datas();
    }
    
    
    @Post()
    @ApiCreatedResponse({ description:'Retorna que houve sucesso na inclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na inclusão.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async criaCadastro(@Body() dadosCadastro: criaDoadorDTO): Promise <RetornoDoadorDTO>{       
        var novoCadastro = new DoadorEntity(uuid(), dadosCadastro.nome, dadosCadastro.email,
                                            dadosCadastro.telefone, dadosCadastro.senha,this.objDatas.dataAtual(),
                                            dadosCadastro.tipoSanguineo
        )
        this.Doador.AdicionarCadastro(novoCadastro);

        var retorno = new RetornoDoadorDTO('Cadastro criado',novoCadastro);        
        return retorno        
    }

    @Post('/login')
    @ApiResponse({status: 201, description:'Retorna que houve sucesso na consulta'})    
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async fazerLogin(@Body() dadosLogin: loginDoadorDTO){
        var retornoLogin = this.Doador.Login(dadosLogin.email,dadosLogin.senha)

        var retorno = new RetornoDoadorDTO(retornoLogin.status?'Login efetuado, sucesso':'Email ou senha invalidos!',retornoLogin.cadastro);        

        return retorno;       
        
    }
    @Put('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraDoador(@Body() dadosNovos: alteraDoadorDTO,@Param('id') id: string){
        var retornoAlteracao = this.Doador.alteraCadastro(id,dadosNovos)
        var retorno = new RetornoDoadorDTO('Alteração Efetuada',retornoAlteracao);        
        return retorno;       
        
    }

    @Delete('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na exclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na exclusão.'})
    async removeCadastro(@Param('id') id: string){
        var retornoExclusao = await this.Doador.removeCadastro(id)
        var retorno = new RetornoDoadorDTO('Exclusão Efetuada',retornoExclusao);        
        return retorno;       
        
    }
    @Get('/:ID') 
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    async retornaCadastroId(@Param('ID') ID:string){
        var cadastrosListados = this.Doador.pesquisaId(ID);
        const ListaRetorno = new ListaDoadoresDTO(cadastrosListados.id,
                                                cadastrosListados.nome,
                                                cadastrosListados.email)

        return {
                Cadastro: ListaRetorno
            };
    }

    @Get()
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    async retornaCadastro(): Promise <ListagemDoadoresDTO>{
        var cadastrosListados = this.Doador.Cadastros;
        const ListaRetorno = cadastrosListados.map(
            cadastro => new ListaDoadoresDTO(
                cadastro.id,
                cadastro.nome,
                cadastro.email
            )
        );
        const retorno = new ListagemDoadoresDTO(ListaRetorno);
        return retorno
    }
}