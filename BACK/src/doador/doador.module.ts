
import { Module } from '@nestjs/common';
import { DoadorController, doadorProviders } from './doador.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DoadorService } from './doador.service';


@Module({ 
  imports:[DatabaseModule],
  controllers: [DoadorController],  
  providers: [...doadorProviders,DoadorService],
})
export class DoadorModule {}
