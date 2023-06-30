import { UserDTO } from '@/dtos/UserDTO';
import repos from '@/infra/database';
import { HttpResponse } from '@/protocols/http';
import routerHandler from '@/utils/router-handler';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse<HttpResponse>>();

router.get(async (req, res) => {
    const { username } = req.query;

    const existsUser = await repos.user.findByUsername({ username: username as string });
    if (!existsUser || !existsUser.verified) {
        return res.status(404).json({
            error: 'Usuario não econtrado',
        });
    }

    const user = new UserDTO(existsUser);
    return res.status(200).json({
        data: { user }
    });
});

export default routerHandler(router);