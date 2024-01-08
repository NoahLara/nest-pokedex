import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Adding a global prefix for our API, this will affect all our application in all controllers automatically
  app.setGlobalPrefix('api/v2');
  await app.listen(3000);
}
bootstrap();
