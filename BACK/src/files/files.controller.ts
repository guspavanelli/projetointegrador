import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FilesService } from "./files.service";
import multerconfig from "./multer-config";
import { FileInterceptor} from '@nestjs/platform-express';
import { Request } from 'express';


@Controller('/files')
export class FilesController{
    constructor(private readonly fileService: FilesService){}
    @Post()
    @UseInterceptors(FileInterceptor('arquivo',multerconfig))
    async uploadArquivo(@UploadedFile() file: Express.Multer.File, @Req () req: Request){
        return this.fileService.salvarDados(file, req)
    }

    @Get('imgid')
    async retornaArquivo(@Param('imgid') image, @Res()res){
        let img = await this.fileService.localicar(image);
        return res.sendFile(img.URL,{root: './upload/'})
    }
}