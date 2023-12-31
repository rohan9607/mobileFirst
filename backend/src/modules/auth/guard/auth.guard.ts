import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException({
        status: HttpStatus.UNAUTHORIZED,
        success: false,
        message: "Unauthorized",
      });
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: "1ca9fe5f5318593628dfccdbfe841554df9c566c9b10fdaced2a128f4ff031e5"
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['auth'] = payload;
    } catch {
      throw new UnauthorizedException({
        status: HttpStatus.UNAUTHORIZED,
        success: false,
        message: "Unauthorized",
      });
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
