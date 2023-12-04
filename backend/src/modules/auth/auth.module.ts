import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailService } from 'src/services/mailer.service';

@Module({
  imports :[
    JwtModule.register({
      global: true,
      secret:
        '1ca9fe5f5318593628dfccdbfe841554df9c566c9b10fdaced2a128f4ff031e5',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([
      User,
    ]),
    
  ],
  controllers: [AuthController],
  providers: [AuthService, EmailService],
})
export class AuthModule {}
