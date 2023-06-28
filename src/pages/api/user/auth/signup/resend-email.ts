import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import { DetailsUserSchema } from '@/schemas/User';
import { jwt } from '@/utils/jwt';
import mail from '@/utils/mail';
import verifyEmailTemplate from '@/utils/mail/templates/verify-email';
import routerHandler from '@/utils/router-handler';
import { schemaHandler } from '@/utils/schema-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.post(async (req, res) => {
    const { username } = req.body;
    const email = String(req.body.email).toLocaleLowerCase();

    const { error } = schemaHandler(DetailsUserSchema, { username, email });
    if(error) {
        return res.status(400).json({
            error
        });
    }

    const existsUser = await repos.user.findByEmailOrUsername({ username, email });
    if (!existsUser) {
        return res.status(404).json({
            error: 'Usuario não econtrado'
        });
    }

    if(existsUser.verified) {
        return res.status(400).json({
            error: 'Esta conta já esta verificada'
        });
    }

    const verification_token = jwt.sign({ id: existsUser.id, email }, {
        expiresIn: '10m',
        subject: existsUser.id,
    });

    const sendedMail = mail.sendMail({
        subject: 'Vamos validar sua conta!',
        html: verifyEmailTemplate({ hash: verification_token }),
        to: email,
    });

    console.log(verification_token);

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