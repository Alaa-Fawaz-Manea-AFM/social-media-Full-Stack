import { GlobalExceptionFilter } from './globalErrorHandler';
import { ValidationPipe } from '@nestjs/common';
import { WinstonConfig } from './utils/logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonConfig,
  });

  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.use(cookieParser());
  app.use(morgan('dev'));
  app.use(json());
  
const allowedOrigins = [
  'https://social-media-full-stack-fzzf.vercel.app',
  'http://localhost:3000'
];

app.enableCors({
  origin: allowedOrigins,
  credentials: true,

  methods: [
    'GET',
    'HEAD',
    'PUT',
    'POST',
    'DELETE',
    'PATCH',
    'OPTIONS',
  ],

  allowedHeaders: [
    'Content-Type',
    'Authorization',
  ],
});

  // const allowedOrigins = [CLIENT_URL];
  // const allowedOrigins = ['https://social-media-full-stack-fzzf.vercel.app']
  // app.enableCors({
  //   origin: allowedOrigins,
  //   // origin: (origin, callback) => {
  //   //   if (!origin || allowedOrigins.includes(origin)) {
  //   //     callback(null, true);
  //   //   } else {
  //   //     callback(new Error('Not allowed by CORS'));
  //   //   }
  //   // },
  //   credentials: true,
  //   methods:'GET, HEAD, PUT, POST, DELETE, POTIONS, PATCH',
  //   allawedHeaders:'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma'
  // });
  app.enableShutdownHooks();
  await app.listen(process.env.PORT || 3001);
}

bootstrap();
