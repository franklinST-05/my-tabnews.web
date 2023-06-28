import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Icon from '../../../../public/favicon.svg';

const CheckEmailPage: React.FC = () => {
    return (
        <main className="flex items-center justify-center text-center">
            <Head>
                <title>Confirm · Tabnews</title>
                <link rel="shortcut icon" href="/error_favicon.svg" type="image/x-icon" />
            </Head>

            <div className="mt-32 flex flex-col items-center">
                <Image src={Icon} height={130} width={130} alt="Tabnews" />
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Verifique seu email</h1>
                    <p className="text-sm text-desc">Não compartilhe os dados passados por email com ninguem!</p>
                </div>
            </div>
        </main>
    );
};

export default CheckEmailPage;