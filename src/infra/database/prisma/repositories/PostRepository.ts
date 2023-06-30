import { PostModel } from '@/domain/models/Post';
import { CreatePostModel, PostRepo } from '@/domain/usecases/Post';
import client from '../client';

export class PostRepository implements PostRepo {

    async create({ title, categories, description, slug, body, user_id }: CreatePostModel): Promise<PostModel> {

        const categoryQueries = categories.map((category) => {
            return {
                where: { name: category },
                create: { name: category }
            };
        });

        return await client.post.create({
            data: {
                title,
                slug,
                description,
                body,
                Category: { connectOrCreate: categoryQueries },
                User: { connect: { id: user_id } }
            }
        });

    }

}