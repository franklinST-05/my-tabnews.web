import { CreatePost } from './CreatePost';
import { FindPostBySlug } from './FindPostBySlug';

export * from './CreatePost';
export * from './FindPostBySlug';

export type PostRepo = CreatePost & FindPostBySlug;