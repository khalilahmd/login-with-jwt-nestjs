import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Role } from './enums/role.enum';
import { RolesGuard } from './auth/roles.guard';
import { Roles } from './auth/roles.decorators';

@Controller('/')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login') 
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfle(@Request() req) {
    return req.user;
  }

  @UseGuards( JwtAuthGuard, RolesGuard )
  @Roles(Role.Admin)
  @Get('/api/test/user')
  getProtected() {
    return 'protected data';
  }
}
