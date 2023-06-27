import { HttpResponse } from '@/protocols/http';
import routerHandler from '@/utils/router-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.post((req, res) => {
    const { name, username, email, password } = req.body;
    return res.json({
        data: {
            name,
            username,
            email,
            password
        }
    });
});

export default routerHandler(router);