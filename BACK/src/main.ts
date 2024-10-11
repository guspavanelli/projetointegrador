//arquivo com função de inicio da aplicação, responsável por iniciar o projeto e dar parametros de execução.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

  const config = new DocumentBuilder()
  .setTitle('API Projeto Integrador - StreamingAPI')
  .setDescription(
    'A presente API tem como objetivo a conexão entre o frontend e o backend do projeto Sangue Bom',
  )
  .setVersion('1.0')
  .addTag('doador')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  useContainer(app.select(AppModule),{fallbackOnErrors:true})
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
