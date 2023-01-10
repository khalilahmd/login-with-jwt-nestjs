import { Injectable } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'password',
            roles: [Role.Admin]
        },
        {
            userId: 2,
            username: 'maria',
            password: 'password',
            roles: [Role.User]
        }
    ];

    findOne(username: string): User {
        return this.users.find(user => user.username === username)
    }
}
