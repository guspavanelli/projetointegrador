import { DataSource } from 'typeorm';
import { DOADOR } from './doador.entity';
 
export const doadorProviders = [
  {
    provide: 'DOADOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DOADOR),
    inject: ['DATA_SOURCE'],
  },
];
 
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { criaDoadorDTO } from "./dto/Doador.dto";
import { alteraDoadorDTO } from "./dto/alteraDadosDoador.dto";
import { ListaDoadoresDTO, ListagemDoadoresDTO } from "./dto/listaDoadores.dto";
import { DoadorService } from "./doador.service";
import { RetornoCadastroDTO, RetornoObjDTO } from './dto/retornoDoador.dto'; 
import { loginDoadorDTO } from './dto/loginDoador.dto';
import { RetornoDoadorDTO } from './dto/retornoDoador1.dto';
@ApiTags('doador')
//decorator responsável por definir que essa classe é um controller, dentro do parenteses é necessário informar o URL desse controller
@Controller('/doadores')
export class DoadorController{
    //controller com injeção de dependencia da classe de usuários armazenados
    constructor(private readonly doadorService: DoadorService){
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
    async criaDoador(@Body() dadosDoador: criaDoadorDTO): Promise <RetornoCadastroDTO>{      
        //criação do objeto de usuário, aqui é criado um objeto específico desse usuário
       
        //gravação do usuário, aqui é inserido no DM o usuário criado anteriormente
        var retorno = this.doadorService.inserir(dadosDoador);                      
        return retorno        
    }
 
    @Put('/:id')//linha que define o método vai ser de alteração (put), nesse caso também é especificado um parametro na URL, por onde vai chegar o id do usuário
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraDoador(@Body() dadosNovos: alteraDoadorDTO,@Param('id') id: string){//aqui é definido que vai receber dados tanto do body quanto da URL(param)
        //aqui é chamada a função de alteração de usuário, onde ja é feita toda a modificação do usuário
        var retornoAlteracao = this.doadorService.alterar(id,dadosNovos)
        //criação do padrão de retorno  
        return retornoAlteracao;      
       
    }
 
    @Post('/login')//linha que define o método post para login, nesse caso é idenficado o URL,
    @ApiResponse({status: 201, description:'Retorna que houve sucesso na consulta'})    
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async fazerLogin(@Body() dadosLogin: loginDoadorDTO){
        //chamada da função de login
        var retornoLogin = await this.doadorService.Login(dadosLogin.EMAIL,dadosLogin.SENHA)
        //criação de retorno, onde caso a resposta seja true é retornado login efetuado, caso seja false, retorna email ou senha invalidos, também é retornado o usuário logado

        var retorno = new RetornoDoadorDTO(retornoLogin.status?'Login efetuado, sucesso':'Email ou senha invalidos!',retornoLogin.doador);        

        return retorno;       
        
    }
    


    @Delete('/ID:id')//linha que define o método vai ser de exclusão (delete), nesse caso também é especificado um parametro na URL, por onde vai chegar o id do usuário
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na exclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na exclusão.'})
    async removeFilme(@Param('id') id: string){//aqui é definido que vai receber dados da URL(param)
        //aqui é chamada a função de exclusão de usuário, onde ja é feita toda a exclusão do usuário
        var retornoExclusao = await this.doadorService.remover(id)  
        return retornoExclusao;
    }
 
    // @Get('/:ID')//criação de método GET, para retornar usuários filtrados pelo ID, onde é necessário passar o ID do usuário pelo url
    // @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    // @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    // async retornadoadorId(@Param('ID') ID:string){
    //     //aqui é feita a pesquisa do filme, depois é criado mapeado os dados desse usuário para um retorno padrão (lista filme DTO)
    //     var doadoresListados = await this.doadorService.Compartilhar(ID);
    //     return {
    //             doador: doadoresListados
    //         };
    // }
 
    @Get()//aqui é criado um método GET sem nenhum tipo de recepção de dados, onde é retornada uma lista de uusários
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    async retornaDoador(): Promise <ListaDoadoresDTO[]>{
        //Aqui são pesquisados os usuários a serem listados, depois é feito um mapeamento de dados para retornar as informações no padrão de resposta esperado (listaFilmeDTO)
        return this.doadorService.listar();
    }
}
 