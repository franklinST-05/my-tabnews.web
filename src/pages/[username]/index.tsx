import CardNews from '@/components/CardNews';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FiGithub, FiMail } from 'react-icons/fi';

const UserPage: React.FC = () => {

    const router = useRouter();
    const { username } = router.query;
    const name = 'Franklin';
    const email = 'franklinteixeira205@gmail.com';

    return (
        <main>
            <Head>
                <title>{username} · TabNews</title>
            </Head>
            <section className="py-8">
                <div>
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <h2 className="text-base text-gray-400">{username}</h2>
                </div>
            </section>
            <section className="space-y-8">
                <CardNews />
                <CardNews />
            </section>
        </main>
    );
};

export default UserPage;