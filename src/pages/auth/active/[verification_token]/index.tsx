import Spinner from '@/components/Spinner';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ActiveAccountPage: React.FC = () => {

    const router = useRouter();
    const { verification_token } = router.query;

    const [loading, setLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<string>();

    const verificationTokenHandle = async (token: string) => {
        try {
            await axios.get('/api/user/auth/' + token);
            router.push('/auth/signin');
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response?.status === 409) router.push('/auth/signin');
                router.push('/404');
            }

            setLoading(false);
            setMessage('Ops! aconteceu um imprevisto, tente novamente em alguns minutos');
        }
    };

    useEffect(() => {
        verificationTokenHandle(verification_token as string);
    }, [verification_token]);

    return (
        <main className="flex justify-center">
            <div className="py-8 max-w-max flex flex-col items-center justify-center">
                <Spinner loading={loading} hideOnNotLoading />
                <p className=" py-8 text-base font-medium text-desc">
                    {message ?? 'Aguarde sua conta esta sendo ativada....'}
                </p>
            </div>
        </main>
    );
};

export default ActiveAccountPage;