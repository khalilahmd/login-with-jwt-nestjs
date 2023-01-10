import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'password',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'password',
        }
    ];

    findOne(username: string): User {
        return this.users.find(user => user.username === username)
    }
}
