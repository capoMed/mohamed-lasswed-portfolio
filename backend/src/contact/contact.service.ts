import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactMessage } from './entities/contact-message.entity';
import { CreateContactDto } from './dto/create-contact.dto';
@Injectable() export class ContactService { constructor(@InjectRepository(ContactMessage) private readonly repo:Repository<ContactMessage>){} async create(dto:CreateContactDto){const saved=await this.repo.save(this.repo.create(dto));return {message:'Your message has been received.',id:saved.id};} }
