import { HttpResponse } from '@/protocols/http';
import { jwt } from '@/utils/jwt';
import { NextHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next/types';

interface DataAuthPayload {
    id: string;
    email: string;
}

export function isAuth(req: NextApiRequest, res: NextApiResponse<HttpResponse>, next: NextHandler) {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({
                error: 'Usuario não autorizado'
            });
        }

        const [, token] = authorization.split(' ');

        const payload = jwt.verify<DataAuthPayload>(token);
        if (!payload) {
            return res.status(401).json({
                error: 'Sua sessão esta expirada'
            });
        }

        req.auth_user = payload;
        return next();
        
    } catch(error) {
        return res.status(401).json({
            error: 'Tente se logar novamente'
        });
    }
}