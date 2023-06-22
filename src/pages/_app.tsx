import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './_styles.css';
import Header from '@/components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Tabnews</title>
            </Head>
            
            <Header />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;