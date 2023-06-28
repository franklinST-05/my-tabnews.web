import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import { UpdatePasswordUserSchema } from '@/schemas/User';
import { cryptography } from '@/utils/cryptography';
import { jwt } from '@/utils/jwt';
import routerHandler from '@/utils/router-handler';
import { schemaHandler } from '@/utils/schema-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.post(async (req, res) => {
    const { token } = req.query;

    const payload = jwt.verify<{ email: string }>(token as string);

    if (payload === null) {
        return res.status(404).json({
            error: 'Usuario não encontrado',
        });
    }

    const { password, confirmPassword } = req.body;

    if (password != confirmPassword) {
        return res.status(404).json({
            error: 'Senhas incoerentes',
        });
    }

    const { error } = schemaHandler(UpdatePasswordUserSchema, { password, confirmPassword });
    if (error) {
        return res.status(404).json({
            error
        });
    }

    const { email } = payload.data;
    const existsUser = await repos.user.findByEmail({ email });

    if (!existsUser) {
        return res.status(404).json({
            error: 'Usuario não econtrado',
        });
    }

    if (!existsUser.verified) {
        return res.status(409).json({
            error: 'Esta conta não esta verificada'
        });
    }

    const encryptedPassword = await cryptography.hash(password);
    await repos.user.update({
        id: existsUser.id,
        password: encryptedPassword,
    });

    return res.status(200).json({
        data: {}
    });
});

export default routerHandler(router);