import { CategoryModel } from '@/domain/models/Category';

export interface FindCategoryByPostModel {
    post_id: string;
}

export interface FindCategoryByPost {
    findByPost(category: FindCategoryByPostModel): Promise<CategoryModel[] | []>
}