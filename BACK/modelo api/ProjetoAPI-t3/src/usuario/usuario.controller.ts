//classe controller do módulo de usuário
//Classe controller é responsável por receber as requisições de fora da API, ele adminstra as requisições recebendo e respondendo elas.

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import {v4  as uuid} from 'uuid'
import { UsuariosArmazenados } from "./usuario.dm";
import { RetornoUsuarioDTO } from "./dto/retornoUsuario.dto";
import { ListagemUsuariosDTO, ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { loginUsuarioDTO } from "./dto/loginUsuario.dto";
import { alteraUsuarioDTO } from "./dto/alteraUsuario.dto";
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { promises } from "dns";
import Datas from "src/utils/data";

@ApiTags('usuario')
//decorator responsável por definir que essa classe é um controller, dentro do parenteses é necessário informar o URL desse controller
@Controller('/usuarios')
export class UsuarioController{
    objDatas: Datas;
    //controller com injeção de dependencia da classe de usuários armazenados
    constructor(private Usuarios : UsuariosArmazenados){
        this.objDatas = new Datas();
    }

    //POST - Recebe dados, pode ou não retornar informações, mas em geral recebe dados e retorna uma resposta
    //GET - Recebe apenas parametros, mas retorna dados variados, normalmente utilizado para consulta de dados
    //PUT - recebe dados, utilizado para fazer alterações de registros
    //DELETE - recebe dados, utilizado para remover registros ----


    @Post()//essa linha, seria um decorator para definir que a função é um metodo POST
    //Para receber dados do body da requisição, deve utilizar o decorator de "Body", especificando depois a variavel
    @ApiCreatedResponse({ description:'Retorna que houve sucesso na inclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na inclusão.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO): Promise <RetornoUsuarioDTO>{       
        //criação do objeto de usuário, aqui é criado um objeto específico desse usuário 
        var novoUsuario = new UsuarioEntity(uuid(), dadosUsuario.nome, dadosUsuario.idade, 
                                            dadosUsuario.cidade, dadosUsuario.email,
                                            dadosUsuario.telefone,this.objDatas.dataAtual(), dadosUsuario.senha
        )
        //gravação do usuário, aqui é inserido no DM o usuário criado anteriormente
        this.Usuarios.AdicionarUsuario(novoUsuario);

        //criação do padrão de retorno, para depois ser retornado como resposta do método, também é retornado os dados do usuário logado
        var retorno = new RetornoUsuarioDTO('Usuario criado',novoUsuario);        
        return retorno        
    }

    @Post('/login')//linha que define o método post para login, nesse caso é idenficado o URL,
    @ApiResponse({status: 201, description:'Retorna que houve sucesso na consulta'})    
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async fazerLogin(@Body() dadosLogin: loginUsuarioDTO){
        //chamada da função de login
        var retornoLogin = this.Usuarios.Login(dadosLogin.email,dadosLogin.senha)
        //criação de retorno, onde caso a resposta seja true é retornado login efetuado, caso seja false, retorna email ou senha invalidos, também é retornado o usuário logado

        var retorno = new RetornoUsuarioDTO(retornoLogin.status?'Login efetuado, sucesso':'Email ou senha invalidos!',retornoLogin.usuario);        

        return retorno;       
        
    }

    @Put('/:id')//linha que define o método vai ser de alteração (put), nesse caso também é especificado um parametro na URL, por onde vai chegar o id do usuário
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraUsuario(@Body() dadosNovos: alteraUsuarioDTO,@Param('id') id: string){//aqui é definido que vai receber dados tanto do body quanto da URL(param)
        //aqui é chamada a função de alteração de usuário, onde ja é feita toda a modificação do usuário
        var retornoAlteracao = this.Usuarios.alteraUsuario(id,dadosNovos)
        //criação do padrão de retorno
        var retorno = new RetornoUsuarioDTO('Alteração Efetuada',retornoAlteracao);        
        return retorno;       
        
    }


    @Put('/assinatura/:dias/:id')//linha que define o método vai ser de alteração (put), nesse caso também é especificado um parametro na URL, por onde vai chegar o id do usuário
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async adicionaAssinatura(@Param('id') id: string,@Param('dias') dias: string){//aqui é definido que vai receber dados tanto do body quanto da URL(param)
        
        var retornoAlteracao = this.Usuarios.adicionaAssinatura(id,Number(dias))

        var retorno = new RetornoUsuarioDTO('Alteração Efetuada',retornoAlteracao);        
        return retorno;    
        
    }

    @Delete('/:id')//linha que define o método vai ser de exclusão (delete), nesse caso também é especificado um parametro na URL, por onde vai chegar o id do usuário
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na exclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na exclusão.'})
    async removeUsuario(@Param('id') id: string){//aqui é definido que vai receber dados da URL(param)
        //aqui é chamada a função de exclusão de usuário, onde ja é feita toda a exclusão do usuário
        var retornoExclusao = await this.Usuarios.removeUsuario(id)
        //criação do padrão de retorno
        var retorno = new RetornoUsuarioDTO('Exclusão Efetuada',retornoExclusao);        
        return retorno;       
        
    }

    @Get('/:ID')//criação de método GET, para retornar usuários filtrados pelo ID, onde é necessário passar o ID do usuário pelo url 
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    async retornaUsuarioId(@Param('ID') ID:string){
        //aqui é feita a pesquisa do usuário, depois é criado mapeado os dados desse usuário para um retorno padrão (lista usuario DTO)
        var usuariosListados = this.Usuarios.pesquisaId(ID);
        const ListaRetorno = new ListaUsuarioDTO(usuariosListados.id,
                                                usuariosListados.nome,
                                                usuariosListados.email)

        return {
                Usuario: ListaRetorno
            };
    }

    @Get('/assinatura/:ID')//criação de método GET, para retornar usuários filtrados pelo ID, onde é necessário passar o ID do usuário pelo url 
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    async retornaAssinatura(@Param('ID') ID:string){
        //aqui é feita a pesquisa do usuário, depois é criado mapeado os dados desse usuário para um retorno padrão (lista usuario DTO)
        var usuariosListados = this.Usuarios.pesquisaId(ID);
        
        var diferenca = this.objDatas.diferencaDias(usuariosListados.assinatura)

        return {
                validadeAssinatura: diferenca
            };
    }

    @Get()//aqui é criado um método GET sem nenhum tipo de recepção de dados, onde é retornada uma lista de uusários
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    async retornaUsuario(): Promise <ListagemUsuariosDTO>{
        //Aqui são pesquisados os usuários a serem listados, depois é feito um mapeamento de dados para retornar as informações no padrão de resposta esperado (listaUsuarioDTO)
        var usuariosListados = this.Usuarios.Usuarios;
        const ListaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.email
            )
        );

        const retorno = new ListagemUsuariosDTO(ListaRetorno);


        return retorno
    }
}