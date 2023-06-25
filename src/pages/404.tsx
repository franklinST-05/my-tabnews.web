import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icon from '../../public/error_favicon.svg';

const ErrorNotFoundPage: React.FC = () => {
    return (
        <main className="flex items-center justify-center text-center">
            <Head>
                <title>404 · Tabnews</title>
                <link rel="shortcut icon" href="/error_favicon.svg" type="image/x-icon" />
            </Head>

            <div className="mt-32 flex flex-col items-center">
                <Image src={Icon} height={130} width={130} alt="Pagina não encontrada"/>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Onde estou?</h1>
                    <Link href="/" className="text-info">Retornar à tela inicial</Link>
                </div>
            </div>
        </main>
    );
};

export default ErrorNotFoundPage;