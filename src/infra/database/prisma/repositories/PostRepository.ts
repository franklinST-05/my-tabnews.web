import { PostModel } from '@/domain/models/Post';
import { CreatePostModel, PostRepo } from '@/domain/usecases/Post';
import client from '../client';

export class PostRepository implements PostRepo {
    
    async create({ title, description, slug, body, user_id }: CreatePostModel): Promise<PostModel> {
        return await client.post.create({
            data: {
                title,
                slug,
                description,
                body,
                User: {
                    connect: { id: user_id }
                }
            }
        });
    }

}