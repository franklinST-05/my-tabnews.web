import { PostModel } from '@/domain/models/Post';

export interface FindPostByUserModel {
    username: string;
    Options?: {
        skip?: number,
        take?: number,
    }
}

export interface FindPostByUser {
    findByUser(post: FindPostByUserModel): Promise<[] | PostModel[]>
}