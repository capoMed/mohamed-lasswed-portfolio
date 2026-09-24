import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateContactDto { @IsString() @MinLength(2) @MaxLength(100) name!:string; @IsEmail() @MaxLength(180) email!:string; @IsString() @MinLength(10) @MaxLength(3000) message!:string; }
