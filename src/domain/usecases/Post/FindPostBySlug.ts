import { PostModel } from '@/domain/models/Post';

export interface FindPostBySlugModel {
    slug: string;
}

export interface FindPostBySlug {
    findBySlug(post: FindPostBySlugModel): Promise<PostModel | null>
}