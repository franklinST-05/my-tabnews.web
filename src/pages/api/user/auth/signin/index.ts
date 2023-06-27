import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import { cryptography } from '@/utils/cryptography';
import { jwt } from '@/utils/jwt';
import routerHandler from '@/utils/router-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.post(async (req, res) => {
    const { password } = req.body;
    const email = String(req.body.email).toLocaleLowerCase();

    const existsUser = await repos.user.findByEmail({ email });
    if (!existsUser) {
        return res.status(404).json({
            error: 'Usuario não econtrado com este email'
        });
    }
    
    if(!existsUser.verified) {
        return res.status(401).json({
            error: 'Usuario não verificado'
        });
    }
    
    const validPass = await cryptography.compare(password, existsUser.password);
    if (!validPass) {
        return res.status(400).json({
            error: 'Senha invalida'
        });
    }

    const token = jwt.sign({
        id: existsUser.id,
        email: existsUser.email,
    }, { expiresIn: '4d', subject: existsUser.id });

    return res.status(200).json({
        data: { token }
    });
});

export default routerHandler(router);