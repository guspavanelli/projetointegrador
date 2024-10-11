//classe de modulo do usuário, responsável por administrar todo o modulo de usuário, incluindo controller, DM, e validators, 
//tudo o que o modulo de usuário contem, é adinistrado pela classe de módulo

import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuariosArmazenados } from './usuario.dm';
import { emailUnicoValidator } from './validacao/email-unico.validator';

@Module({  
  controllers: [UsuarioController],  
  providers: [UsuariosArmazenados,emailUnicoValidator],
})
export class UsuarioModule {}
