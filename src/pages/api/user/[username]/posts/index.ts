import { PostDTO } from '@/dtos/PostDTO';
import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import { safeNumber } from '@/utils/math';
import routerHandler from '@/utils/router-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.get(async (req, res) => {
    const { username, skip, rows } = req.query;

    const existsPosts = await repos.post.findByUser({
        username: username as string,
        Options: {
            skip: safeNumber(skip),
            take: safeNumber(rows, 5),
        }
    });

    if (!existsPosts) {
        return res.status(404).json({
            error: 'Usuario não econtrado',
        });
    }

    const posts = PostDTO.fromArray(existsPosts);
    return res.status(200).json({
        data: { posts }
    });
});


export default routerHandler(router);