import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { AlteraGeneroDTO } from "./dto/atualizaGenero.dto";
import { CriaGeneroDTO } from "./dto/criaGenero.dto";
import { GENERO } from "./genero.entity";
import { GeneroService } from "./genero.service";

@Controller('/genero')
export class GeneroController{
    constructor(private readonly generoService: GeneroService){

    }

    @Get('listar')
    async listar(): Promise<GENERO[]>{
        return this.generoService.listar();
    }

    @Post('')
    async criaGenero(@Body() dados: CriaGeneroDTO): Promise<RetornoCadastroDTO>{
        return this.generoService.inserir(dados)
    }

    @Put(':id')
    async alterarGenero(@Body() dados: AlteraGeneroDTO,@Param('id') id:string): Promise<RetornoCadastroDTO>{
        return this.generoService.alterar(id,dados)
    }

    @Get('ID- :id')
    async listarID(@Param('id') id: string): Promise<GENERO>{
        return this.generoService.localizarID(id);
    }

    @Delete('remove- :id')
    async removeGenero(@Param('id') id:string): Promise<RetornoObjDTO>{
        return this.generoService.remover(id);
    }
}