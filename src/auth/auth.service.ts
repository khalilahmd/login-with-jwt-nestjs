import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {
    }

     validateUser = async (username: string, pass: string) => {
        const user: any = this.usersService.findOne(username);
        if(user && user.password === pass) {
            const { password, ...result } = user;
            return result;
            }

            return null;
        }
}
