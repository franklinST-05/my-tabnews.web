import { CategoryRepository } from './prisma/repositories/CategoryRepository';
import { PostRepository } from './prisma/repositories/PostRepository';
import { UserRepository } from './prisma/repositories/UserRepository';

const userRepo = new UserRepository();
const postRepo = new PostRepository();
const categoryRepo = new CategoryRepository();

const repos = {
    user: userRepo,
    post: postRepo,
    category: categoryRepo,
};

export default repos;