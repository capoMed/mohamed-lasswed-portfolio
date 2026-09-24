import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap(){const app=await NestFactory.create(AppModule);app.setGlobalPrefix('api');app.enableCors({origin:(process.env.FRONTEND_URL||'http://localhost:4200').split(','),methods:['GET','POST','OPTIONS'],allowedHeaders:['Content-Type']});app.useGlobalPipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,transform:true}));const port=Number(process.env.PORT||3000);await app.listen(port,'0.0.0.0');console.log(`API running on ${port}`)}bootstrap();
