import { UserModel } from './User';

export interface PostModel {
    id: string;
    title: string;
    slug: string;
    description: string;
    body: string;
    caffeine: number;
    user_id: UserModel['id']
}