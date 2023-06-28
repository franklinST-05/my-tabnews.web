import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import { CreateUserSchema } from '@/schemas/User';
import { cryptography } from '@/utils/cryptography';
import { jwt } from '@/utils/jwt';
import mail from '@/utils/mail';
import verifyEmailTemplate from '@/utils/mail/templates/verify-email';
import routerHandler from '@/utils/router-handler';
import { schemaHandler } from '@/utils/schema-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.post(async (req, res) => {
    const { name, username, password } = req.body;
    const email = String(req.body.email).toLocaleLowerCase();

    const { error } = schemaHandler(CreateUserSchema, { name, username, password, email });
    if(error) {
        return res.status(400).json({
            error
        });
    }

    const existsUser = await repos.user.findByEmailOrUsername({ username, email });
    if (existsUser) {
        const field = existsUser.email === email ? 'email' : 'username';
        return res.status(409).json({
            error: 'Já existe um usuario com este ' + field
        });
    }

    const encryptedPass = await cryptography.hash(password);
    const { id } = await repos.user.create({
        name,
        username,
        email,
        password: encryptedPass,
    });

    const verification_token = jwt.sign({ id, username, email }, {
        expiresIn: '10m',
        subject: id,
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

    return res.status(201).json({
        data: {}
    });
});

export default routerHandler(router);