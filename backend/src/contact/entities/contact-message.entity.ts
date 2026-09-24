import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('contact_messages') export class ContactMessage { @PrimaryGeneratedColumn() id!:number; @Column({length:100}) name!:string; @Column({length:180}) email!:string; @Column({type:'text'}) message!:string; @CreateDateColumn() createdAt!:Date; }
