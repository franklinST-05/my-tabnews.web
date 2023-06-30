import { PostModel } from '@/domain/models/Post';
import { UserModel } from '@/domain/models/User';

export interface CreatePostModel {
    title: string;
    slug: string;
    description: string;
    categories: Array<string>
    body: string;
    user_id: UserModel['id']
}

export interface CreatePost {
    create(post: CreatePostModel): Promise<PostModel>
}