import { CreatePost } from './CreatePost';
import { FindPostBySlug } from './FindPostBySlug';
import { FindPostByUser } from './FindPostByUser';

export * from './CreatePost';
export * from './FindPostBySlug';
export * from './FindPostByUser';

export type PostRepo = CreatePost & FindPostBySlug & FindPostByUser;