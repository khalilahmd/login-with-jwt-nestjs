import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local-strategy';
import {JwtModule} from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { jwtStrategy } from './jwt-strategy';

@Module({
  imports: [ 
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6000s' }
    })
  ],
  providers: [ AuthService, LocalStrategy, jwtStrategy ],
  exports: [ AuthService ],
})
export class AuthModule { }
