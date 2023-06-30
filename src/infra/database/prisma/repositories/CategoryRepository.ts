import { CategoryModel } from '@/domain/models/Category';
import { CategoryRepo, FindCategoryByPostModel } from '@/domain/usecases/Category';
import client from '../client';

export class CategoryRepository implements CategoryRepo {
    
    async findByPost({ post_id }: FindCategoryByPostModel): Promise<[] | CategoryModel[]> {
        return client.category.findMany({
            where: {
                Post: { some: { id: post_id } }
            }
        });
    }

}