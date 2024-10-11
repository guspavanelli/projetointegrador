
import { Module } from '@nestjs/common';
import { DoadorController } from './doador.controller';
import { DoadoresArmazenados } from './doador.dm';
import { emailUnicoValidator } from './validacao/email-unico.validator';

@Module({  
  controllers: [DoadorController],  
  providers: [DoadoresArmazenados,emailUnicoValidator],
})
export class DoadorModule {}
