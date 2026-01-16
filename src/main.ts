import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS cho cả local và production
  app.enableCors({
    origin: process.env.FRONTEND_URL || '*', // Cho phép mọi origin khi deploy
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    '🚀 Backend đang chạy tại: http://localhost:' + (process.env.PORT ?? 3000),
  );
}

void bootstrap();
