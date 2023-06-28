import Spinner from '@/components/Spinner';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ActiveAccountPage: React.FC = () => {

    const router = useRouter();
    const { verification_token } = router.query;

    const [loading, setLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<string>();

    const verificationTokenHandle = async (token: string) => {
        try {
            await axios.get('/api/user/auth/signup/active/' + token);
            router.push('/auth/signin');
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response?.status === 409) router.push('/auth/signin');
                router.push('/404');
            } else {
                setLoading(false);
                setMessage('Ops! aconteceu um imprevisto, tente novamente em alguns minutos');
            }
        }
    };

    useEffect(() => {
        verificationTokenHandle(verification_token as string);
    }, [verification_token]);

    return (
        <main className="flex items-center justify-center text-center">
            <Head>
                <title>Verification · Tabnews</title>
                <link rel="shortcut icon" href="/error_favicon.svg" type="image/x-icon" />
            </Head>

            <div className="mt-32 flex flex-col items-center">
                <div className="w-32 h-32 flex items-center justify-center">
                    <Spinner loading={loading} />
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">{message ?? 'Aguarde sua conta esta sendo ativada'}</h1>
                    <p className="text-sm text-desc">Não compartilhe quaisquer dados sensiveis</p>
                </div>
            </div>
        </main>
    );
};

export default ActiveAccountPage;