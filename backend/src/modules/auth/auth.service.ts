import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterDTO } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserStatus, UserType } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt"
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/services/mailer.service';
import { v4 as uuidv4 } from 'uuid';
import { userInfo } from 'os';
import { PasswordResetTokenDto } from './dto/password-reset-token.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
    private emailService: EmailService,

  ){}
  async register(payload: RegisterDTO) {
    
    const isExists = await this.userRepository.findOne({where : {email : payload.email}});

    const duplicateUsername = await this.userRepository.findOne({where : {username : payload.username}})

    if (isExists) {
      throw new Error("User is already exists")
    }

    if (duplicateUsername) {
      throw new Error(`${payload.username} username is already taken`)
    }

    const newUser = new User()

    const token = uuidv4();
    newUser.email = payload.email;
    newUser.username = payload.username;
    newUser.mobile_number = payload.mobile;
    newUser.qualification = payload.qualification;
    newUser.city = payload.city;
    newUser.password =  await bcrypt.hash(payload.password, 10);
    newUser.email_token = token
    
    await this.userRepository.save(newUser);

    // Send a mail notification
    await this.emailService.sendEmail(
      payload.email, 
      "User Registered Successfully",
      {
        USERNAME : newUser.username,
        SITE_TITLE : "MobileFirst Applications | Fintegration",
        YEAR : "2023",
        ACTIVATION_LINK : process.env.FRONTEND_URL + "verifyEmail?token="+ token+ "&email="+ payload.email
      },
      "registration"
      )

    
    return true;
  }

 async login (payload : loginDto){
    const user = await this.userRepository.findOne({where : {email : payload.email}});

    if (!user) {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        success: false,
        message: "email does not exists",
        user,
      });
    }

    const isMatch = await bcrypt.compare(payload.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException({
        status: HttpStatus.UNAUTHORIZED,
        success: false,
        message: "Invalid Credentials",
        error: HttpException,
      });
    }

    if (user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException({
        status: HttpStatus.UNAUTHORIZED,
        success: false,
        message: "Email not verified",
        error: HttpException,
      });
    }

    const jwtPayload = {
      user: { id: user?.id, email: user?.email, userType: user?.user_type },
    };
    const token = await this.jwtService.signAsync(jwtPayload);
    return { user, token };
 }
 
 async verifyEmailToken (token : string, email : string) {
  const user = await this.userRepository.findOne({
    select : {
      id : true,
      email_token : true
    },
    where : {
      email : email
    }
  })

  if (!user) {
    throw new UnauthorizedException({
      status: HttpStatus.UNAUTHORIZED,
      success: false,
      message: "user not found",
      error: HttpException,
    });
  }

  if (user.status === UserStatus.ACTIVE) {
    return { message : "email is already verified"}
  }

  const userToken = user.email_token.toString()
  const isMatch = token === userToken;
  
  if (isMatch) {
    user.email_token = "";
    user.status = UserStatus.ACTIVE

    await this.userRepository.update(user.id, user)
    return {success : true, message : "activated"}
  }
  return false
 }

 async forgotPasswordSendEmail(email : string){
    const user = await this.userRepository.findOne({
      select :{id : true, email : true, password_reset_token : true, username : true},
      where : {email : email}
    })
    
    
    if (!user) {
      return false
    }
    
    user.password_reset_token = uuidv4();

    await this.userRepository.update(user.id, user)
    await this.emailService.sendEmail(
      email, 
      "Password reset link",
      {
        USERNAME : user.username,
        SITE_TITLE : "MobileFirst Applications | Fintegration",
        YEAR : "2023",
        RESET_LINK : process.env.FRONTEND_URL + "reset-password?token="+ user.password_reset_token+"&email="+ user.email
      },
      "forgot-password"
      )

      return true

 }

 async changePassword (payload : PasswordResetTokenDto) {
  const user = await this.userRepository.findOne({
    select : {
      id : true,
      email : true,
      password_reset_token : true
    },
    where : {
      email : payload.email
    }
  });
  
  if (!user) {
     throw new NotFoundException({
       status: HttpStatus.NOT_FOUND,
       success: false,
       message: "user not found",
       error: HttpException,
     })
  }

  if (user.password_reset_token !== payload.token) {
    throw new UnauthorizedException({
      status: HttpStatus.BAD_REQUEST,
      success: false,
      message: "token is expired",
      error: HttpException,
    })
  }

  user.password_reset_token = ""
  user.password = await bcrypt.hash(payload.password, 10)

  await this.userRepository.update(user.id, user);

  return {message : "Password has been changed Successfully!"}
 }  


 async getUserDetails(userId: number){
  return await this.userRepository.findOne({
    where : {
      id : userId
    },
    select : {
      id : true,
      email : true,
      user_type : true,
      username : true,
      city : true,
      mobile_number : true,
      qualification : true,
    }
  })
 }
}
