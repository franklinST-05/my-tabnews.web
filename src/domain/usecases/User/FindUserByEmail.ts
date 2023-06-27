import { UserModel } from '@/domain/models/User';

export interface FindUserByEmailModel {
    email: string;
}

export interface FindUserByEmail {
    findByEmail(user: FindUserByEmailModel): Promise<UserModel | null>
}