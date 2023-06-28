import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import { ForgotPasswordUserSchema } from '@/schemas/User';
import { jwt } from '@/utils/jwt';
import mail from '@/utils/mail';
import forgotPasswordTemplate from '@/utils/mail/templates/forgot-password';
import routerHandler from '@/utils/router-handler';
import { schemaHandler } from '@/utils/schema-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.post(async (req, res) => {
    const email = String(req.body.email).toLocaleLowerCase();

    const { error } = schemaHandler(ForgotPasswordUserSchema, { email });
    if (error) {
        return res.status(400).json({
            error
        });
    }

    const existsUser = await repos.user.findByEmail({ email });
    if (!existsUser) {
        return res.status(404).json({
            error: 'Usuario não econtrado'
        });
    }

    if (!existsUser.verified) {
        return res.status(400).json({
            error: 'Sua conta não esta veificada'
        });
    }

    const token = jwt.sign({ email }, {
        expiresIn: '5m',
        subject: existsUser.email
    });

    const sendedMail = mail.sendMail({
        subject: 'Recuperar senha',
        html: forgotPasswordTemplate({ hash: token }),
        to: email,
    });

    sendedMail.catch(() => {
        return res.status(500).json({
            error: 'Erro ao enviar o email'
        });
    });

    return res.status(200).json({
        data: {}
    });
});

export default routerHandler(router);