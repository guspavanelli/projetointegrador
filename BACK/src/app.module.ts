//classe de modulo do aplicativo, responsável por administrar todos os modulos da aplicação

import { Module } from '@nestjs/common';
import { DoadorModule } from './doador/doador.module';
import { FilesModule } from './files/files.module';




@Module({
  imports: [DoadorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
