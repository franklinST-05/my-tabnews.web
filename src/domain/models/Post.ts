import { UserModel } from './User';

export interface PostModel {
    id: string;
    title: string;
    slug: string;
    description: string;
    body: string;
    user_id: UserModel['id']
}