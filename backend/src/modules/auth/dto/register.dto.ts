/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { BloodGroup } from '../entities/user.entity';
export class RegisterDTO {
    @IsNotEmpty({ message: "Please enter email" })
    readonly email: string;

    @IsNotEmpty({ message: "Please username password"})
    readonly username: string;
    
    @IsNotEmpty({ message: "Please enter password" })
    readonly password: string;
    
    @IsNotEmpty({ message: "Please enter mobile" })
    readonly mobile: string;
   
    @IsNotEmpty({ message: "Please enter city" })
    readonly city: string;
    
    @IsNotEmpty({ message: "Please enter qualification" })
    readonly qualification : string;
}
