import { UserModel } from '@/domain/models/User';

export interface FindUserByEmailOrUsernameModel {
    email: string;
    username: string;
}

export interface FindUserByEmailOrUsername {
    findByEmailOrUsername(user: FindUserByEmailOrUsernameModel): Promise<UserModel | null>
}