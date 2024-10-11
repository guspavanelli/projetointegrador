//classe de modulo do aplicativo, responsável por administrar todos os modulos da aplicação

import { Module } from '@nestjs/common';
import { CadastroModule } from './cadastro/cadastro.module';
import { DoadorModule } from './doador/doador.module';



@Module({
  imports: [CadastroModule,DoadorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
