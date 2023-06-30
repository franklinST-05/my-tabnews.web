import { PostModel } from '@/domain/models/Post';
import { UserModel } from '@/domain/models/User';

export interface FindAllPostModel {
    Options?: {
        by?: 'TITLE' | 'RELEVANT';
        skip?: number,
        take?: number,
    } 
}

export interface FindAllPostResponse extends PostModel {
    User: {
        name: UserModel['name'];
        username: UserModel['username'];
    }
}

export interface FindAllPost {
    findAll(post: FindAllPostModel): Promise<[] | FindAllPostResponse[]>
}