import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Remove unknown parameter from payload
      forbidNonWhitelisted: true, //Display error if we have some unknown parameter in request payload
    }),
  );
  await app.listen(5555);
}
bootstrap();
