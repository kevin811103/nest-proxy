import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:4200',
    
    ],
    methods: ["GET", "POST"],
    credentials: true,
  });
  // app.setGlobalPrefix('ipoc-api/api/v1');
  app.setGlobalPrefix('api/v1/');
//  dashboard/get-all
  await app.listen(3000);
}
bootstrap();

