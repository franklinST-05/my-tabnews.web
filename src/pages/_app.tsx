import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Header from '@/components/Header';
import './_styles.css';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Tabnews</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
            </Head>

            <Header />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;