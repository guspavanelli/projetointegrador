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
  .setTitle('API Filmes e series - StreamingAPI')
  .setDescription(
    'A presente API tem como objetivo simular cadastros possiveis para uma API de Stream de filmes e series',
  )
  .setVersion('1.0')
  .addTag('usuario')
  .addTag('filme')
  .addTag('serie')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  useContainer(app.select(AppModule),{fallbackOnErrors:true})
  await app.listen(3000);
}
bootstrap();
