import { HttpResponse } from '@/protocols/http';
import { jwt } from '@/utils/jwt';
import routerHandler from '@/utils/router-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.get(async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            error: 'Usuário não autorizado'
        });
    }

    const [, token] = authorization.split(' ');

    const payload = jwt.verify(token);
    if (!payload) {
        return res.status(401).json({
            error: 'Sua sessão está expirada'
        });
    }

    const expirationDate = new Date(payload.exp * 1000);
    const currentDate = new Date();
    const tokenExpirationThreshold = 1800000;

    const shouldRefreshToken = expirationDate.getTime() - currentDate.getTime() < tokenExpirationThreshold;
    if (shouldRefreshToken) {
        const refreshToken = jwt.sign(payload, { expiresIn: '7d', subject: payload.sub });
        return res.status(201).json({
            data: {
                token: refreshToken
            }
        });
    }

    return res.status(200).json({
        data: {}
    });
});

export default routerHandler(router);