import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';
import { ContactMessage } from './contact/entities/contact-message.entity';
@Module({imports:[ConfigModule.forRoot({isGlobal:true}),TypeOrmModule.forRootAsync({imports:[ConfigModule],inject:[ConfigService],useFactory:(config:ConfigService)=>({type:'mysql',url:config.get<string>('DATABASE_URL')||undefined,host:config.get<string>('DB_HOST','localhost'),port:config.get<number>('DB_PORT',3306),username:config.get<string>('DB_USER','root'),password:config.get<string>('DB_PASSWORD',''),database:config.get<string>('DB_NAME','portfolio'),entities:[ContactMessage],synchronize:config.get('NODE_ENV')!=='production',ssl:config.get('DB_SSL')==='true'?{rejectUnauthorized:false}:undefined})}),ContactModule]}) export class AppModule {}
