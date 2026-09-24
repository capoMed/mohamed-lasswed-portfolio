import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
@Controller('contact') export class ContactController { constructor(private readonly service:ContactService){} @Get('health') health(){return {status:'ok',service:'portfolio-api'};} @Post() create(@Body() dto:CreateContactDto){return this.service.create(dto);} }
