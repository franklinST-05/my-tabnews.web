import jwtoken from 'jsonwebtoken';

interface SignOptions {
    expiresIn: string;
    subject: string;
}

function sign(data: object, { expiresIn, subject }: SignOptions): string {

    return jwtoken.sign({ data }, 'process.env.JWT_SECRET!', {
        expiresIn, 
        subject,
    });
}

interface JwtPayload<T> {
    id: number;
    iat: number;
    exp: number;
    sub: string;
    data: T;
}

function verify<T>(token: string): JwtPayload<T> | null {
    try {
        return jwtoken.verify(token, 'process.env.JWT_SECRET!') as JwtPayload<T>;
    } catch (err) {
        return null;
    }
}

export const jwt = { sign, verify };