import { PostModel } from './Post';
import { UserModel } from './User';

export interface ResponseModel {
    id: string;
    response_parent_id: string;
    post_id: PostModel['id'];
    user_id: UserModel['id'];
    body: string;
    likedBy: Array<UserModel>;
}