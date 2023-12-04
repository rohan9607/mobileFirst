import { Module } from '@nestjs/common';
import { MainAppService } from './main-app.service';
import { MainAppController } from './main-app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../auth/entities/user.entity';
import { Image } from './entities/image.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      User,
      Image
    ])
  ],
  controllers: [MainAppController],
  providers: [MainAppService],
})
export class MainAppModule {}
