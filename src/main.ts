import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ logger: ['error', 'warn', 'log', 'debug', 'verbose'] });
  app.useGlobalFilters(new AllExceptionsFilter());
  const allowedOrigins = ['http://localhost:3001','http://localhost:3000'];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
