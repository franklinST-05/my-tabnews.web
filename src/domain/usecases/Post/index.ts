import { CreatePost } from './CreatePost';
import { FindAllPost } from './FindAllPost';
import { FindPostBySlug } from './FindPostBySlug';
import { FindPostByUser } from './FindPostByUser';

export * from './CreatePost';
export * from './FindPostBySlug';
export * from './FindPostByUser';
export * from './FindAllPost';

export type PostRepo = CreatePost & FindPostBySlug & FindPostByUser & FindAllPost;