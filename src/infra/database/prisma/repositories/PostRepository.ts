import { PostModel } from '@/domain/models/Post';
import { CreatePostModel, FindAllPostModel, FindPostBySlugModel, FindPostByUserModel, PostRepo } from '@/domain/usecases/Post';
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

    async findBySlug({ slug }: FindPostBySlugModel): Promise<PostModel | null> {
        return await client.post.findUnique({
            where: { slug }
        });
    }

    async findByUser({ username, Options }: FindPostByUserModel): Promise<[] | PostModel[]> {
        return await client.post.findMany({
            where: { User: { username } },
            skip: Options?.skip,
            take: Options?.take
        });
    }

    async findAll({ Options }: FindAllPostModel): Promise<[] | PostModel[]> {

        let orderObject: object = {
            title: 'asc',
        };

        if(Options?.by == 'RELEVANT') {
            orderObject = {
                UsersLiked: {
                    _count: 'asc',
                }
            };
        }

        return await client.post.findMany({
            orderBy: orderObject,
            skip: Options?.skip,
            take: Options?.take,
        });
    }

}