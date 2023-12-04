/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class PasswordResetTokenDto {

    @IsNotEmpty({ message: "Please enter password"})
    readonly password: string;
    
    @IsNotEmpty({ message: "Please enter token"})
    readonly token: string;
    
    @IsNotEmpty({ message: "Please enter email"})
    readonly email: string;
}
