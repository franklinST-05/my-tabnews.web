import { UserModel } from '@/domain/models/User';

export interface UpdateUserModel {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    verified?: boolean;
}

export interface UpdateUser {
    update(user: UpdateUserModel): Promise<UserModel>
}