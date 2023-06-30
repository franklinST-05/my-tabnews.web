import { PostDTO } from '@/dtos/PostDTO';
import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import routerHandler from '@/utils/router-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.get(async (req, res) => {
    const { slug } = req.query;

    const existsPost = await repos.post.findBySlug({ slug: slug as string });
    if(!existsPost) {
        return res.status(404).json({
            error: 'Post não econtrado'
        });
    }

    const categories = await repos.category.findByPost({ post_id: existsPost.id });
    const post = new PostDTO(existsPost);
    
    return res.json({
        data: { post, categories } 
    });
});

export default routerHandler(router);