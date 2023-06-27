import { UserModel } from '@/domain/models/User';

export interface FindUserByUsernameModel {
    username: string;
}

export interface FindUserByUsername {
    findByUsername(user: FindUserByUsernameModel): Promise<UserModel | null>
}