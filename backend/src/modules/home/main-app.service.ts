import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';
import { Image } from './entities/image.entity';

@Injectable()
export class MainAppService {
  constructor(
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {}

  async uploadImage(file: Express.Multer.File) {
      const newImg = new Image();
      newImg.imagename = file.originalname;
      return this.imageRepository.save(newImg)
  }
  
  async getImages() {
      return await this.imageRepository.find();
  }

}
