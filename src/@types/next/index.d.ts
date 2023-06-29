/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest } from 'next';

declare module 'next' {
    export interface NextApiRequest {
        auth_user: {
            iat: number;
            exp: number;
            sub: string;
            data: {
                id: string;
                email: string;
            }
        },

    }
}