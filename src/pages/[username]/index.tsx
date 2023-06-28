import CardNews from '@/components/CardNews';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';


const UserPage: React.FC<ServerSideResponse> = ({ user }) => {
    
    return (
        <main>
            <Head>
                <title>{user.username} · TabNews</title>
            </Head>
            <section className="py-8">
                <div>
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <h2 className="text-base text-desc">{user.username}</h2>
                </div>
            </section>
            <section className="space-y-8">
                <CardNews />
                <CardNews />
            </section>
        </main>
    );
};

interface ServerSideResponse {
    user: {
        name: string;
        username: string;
        email: string;
        verified: boolean;
    }
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async (context) => {

    try {
        const { username } = context.query;
        const { data } = await axios.get('http://localhost:3000/api/user/' + username);
        
        return {
            props: { ...data.data }
        };

    } catch (err) {
        return { notFound: true };
    }

};

export default UserPage;