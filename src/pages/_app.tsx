import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './_styles.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Tabnews</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;