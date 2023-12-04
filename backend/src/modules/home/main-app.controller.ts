import { Controller, Get, Post, Body, UseGuards, Req, HttpStatus, Res, Param, ParseIntPipe, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MainAppService } from './main-app.service';
import { AuthGuard } from '../auth/guard/auth.guard';
import { Request, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { RoleGuard } from '../auth/guard/admin.guard';

@Controller('home')
export class MainAppController {
  constructor(private readonly mainAppService: MainAppService) {}

  @Get('images')
  async getAllImages(@Req() request : Request, @Res() response : Response) {   
    try {
      const data = await this.mainAppService.getImages()

      response.status(HttpStatus.CREATED).json({
        success: true,
        message: "Image fetched Successfully",
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

  @UseGuards(AuthGuard, RoleGuard)
  @Post("upload-image")
  @UseInterceptors(FileInterceptor('file', {
    storage : diskStorage({
      destination : "../frontend/public/uploadedImages",
      filename : (req, file, cb) => {
        cb(null, `${file.originalname}`)
      }
    })
  }))
  async uploadImage(@Req() request : Request, @Res() response : Response, @UploadedFile() file: Express.Multer.File) {   
    try {
      const data = await this.mainAppService.uploadImage(file)
      response.status(HttpStatus.CREATED).json({
        success: true,
        message: "Image Uploaded Successfully",
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

}
