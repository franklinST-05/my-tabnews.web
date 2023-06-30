import { PostModel } from '@/domain/models/Post';

export interface FindAllPostModel {
    Options?: {
        by?: 'TITLE' | 'RELEVANT';
        skip?: number,
        take?: number,
    } 
}

export interface FindAllPost {
    findAll(post: FindAllPostModel): Promise<[] | PostModel[]>
}