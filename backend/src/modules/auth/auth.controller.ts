import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus, Query, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterDTO } from './dto/register.dto';
import { Request, Response } from 'express';
import { loginDto } from './dto/login.dto';
import { PasswordResetTokenDto } from './dto/password-reset-token.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async registerUser(
    @Body() payload: RegisterDTO,
    @Req() request: Request,
    @Res() response: Response
  ) {
    try {
      const data = await this.authService.register(payload)

      response.status(HttpStatus.CREATED).json({
        success: true,
        message: "User Created Successfully",
        data: data
      })

    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
        data: {}
      })
    }
  }

  @Post('login')
  async login(@Body() loginDto: loginDto, @Res() response: Response) {
    try {
      const accessToken: any = await this.authService.login(loginDto);

      response.status(HttpStatus.OK).json({
        success: true,
        message: accessToken.msg,
        token_type: 'bearer',
        token: accessToken?.token,
        user: accessToken?.user,
      })
    }
    catch (error) {
      response.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: error.message,
      })
    }
  }

  @Post('verify-email')
  async verifyToken(@Res() response: Response, @Query('token') token: string, @Query('email') email: string) {
    try {
      const data: any = await this.authService.verifyEmailToken(token, email);

      response.status(HttpStatus.OK).json({
        success: true,
        data: data
      })
    }
    catch (error) {
      response.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: error.message,
      })
    }
  }

  @Post('forgot-password/:email')
  async forgotPassword(@Res() response: Response, @Param('email') email: string) {
    try {
      const data: any = await this.authService.forgotPasswordSendEmail(email);

      response.status(HttpStatus.OK).json({
        success: true,
        data: data
      })
    }
    catch (error) {
      response.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: error.message,
      })
    }
  }

  @Post('reset-password-token')
  async changePasswordWithToken(
    @Res() response: Response, 
    @Body() payload: PasswordResetTokenDto
    ) {
    try {
      const data: any = await this.authService.changePassword(payload);

      response.status(HttpStatus.OK).json({
        success: true,
        ...data
      })
    }
    catch (error) {
      response.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: error.message,
      })
    }
  }

  @UseGuards(AuthGuard)
  @Post('fetch-user-details')
  async fetchUserDetails(
    @Res() response: Response, 
    @Req() request: any, 
    ) {
    try {

      const id : number = request?.auth?.user.id
          
      const data: any = await this.authService.getUserDetails(id);

      response.status(HttpStatus.OK).json({
        success: true,
        data
      })
    }
    catch (error) {
      response.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: error.message,
      })
    }
  }


}


