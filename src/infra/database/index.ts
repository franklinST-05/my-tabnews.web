import { PostRepository } from './prisma/repositories/PostRepository';
import { UserRepository } from './prisma/repositories/UserRepository';

const userRepo = new UserRepository();
const postRepo = new PostRepository();

const repos = {
    user: userRepo,
    post: postRepo,
};

export default repos;