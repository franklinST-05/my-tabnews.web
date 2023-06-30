import { PostDTO } from '@/dtos/PostDTO';
import repos from '@/infra/database';
import { isAuth } from '@/middlewares/isAuth';
import { HttpResponse } from '@/protocols/http';
import { CreatePostSchema } from '@/schemas/Post';
import { safeNumber } from '@/utils/math';
import routerHandler from '@/utils/router-handler';
import { schemaHandler } from '@/utils/schema-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import slugify from 'slugify';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.get(async (req, res) => {
    const { skip, rows } = req.query;
    const receivedBy = String(req.query.by).toUpperCase();

    const by = receivedBy === 'TITLE' ? 'TITLE' : 'RELEVANT';

    const existsPosts = await repos.post.findAll({
        Options: {
            skip: safeNumber(skip),
            take: safeNumber(rows , 10),
            by: by,
        }
    });

    const posts = PostDTO.fromArrayIncludesUser(existsPosts);

    return res.json({
        data: { posts }
    });
});

router.post(isAuth, async (req, res) => {
    const { title, description, categories, body } = req.body;
    const { id } = req.auth_user.data;

    const slug = slugify(title, {
        lower: true,
        strict: true,
        trim: true,
    });

    const { error } = schemaHandler(CreatePostSchema, { title, slug, description, categories, body });
    if(error) {
        return res.status(400).json({
            error
        });
    }

    const existsPost = await repos.post.findBySlug({ slug });
    if(existsPost) {
        return res.status(409).json({
            error: 'Já existe um post com este titulo'
        });
    }

    const createdPost = await repos.post.create({
        title,
        slug,
        description,
        body,
        categories,
        user_id: id,
    });

    const post = new PostDTO(createdPost);
    return res.json({ data: { post } });
});

export default routerHandler(router);