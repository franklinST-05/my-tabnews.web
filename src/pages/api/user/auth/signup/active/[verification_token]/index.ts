import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import { jwt } from '@/utils/jwt';
import routerHandler from '@/utils/router-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.get(async (req, res) => {
    const { verification_token } = req.query;

    const payload = jwt.verify<{
        name: string,
        username: string,
        email: string
    }>(verification_token as string);

    if (payload === null) {
        return res.status(404).json({
            error: 'Usuario não encontrado',
        });
    }

    const { email } = payload.data;
    const existsUser = await repos.user.findByEmail({ email });

    if (!existsUser) {
        return res.status(404).json({
            error: 'Usuario não econtrado',
        });
    }

    if (existsUser.verified) {
        return res.status(409).json({
            error: 'Esta conta já esta verificada'
        });
    }

    await repos.user.update({
        id: existsUser.id,
        verified: true,
    });

    return res.status(200).json({
        data: {  }
    });
});

export default routerHandler(router);