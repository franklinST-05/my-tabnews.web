import { UserModel } from '@/domain/models/User';

export interface CreateUserModel {
    name: string;
    username: string;
    email: string;
    password: string;
}

export interface CreateUser {
    create(user: CreateUserModel): Promise<UserModel>
}