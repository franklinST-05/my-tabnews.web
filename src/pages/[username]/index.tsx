import CardNews from '@/components/CardNews';
import { PostDTO } from '@/dtos/PostDTO';
import { UserDTO } from '@/dtos/UserDTO';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';


const UserPage: React.FC<ServerSideResponse> = ({ user, posts }) => {

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
                {posts.map((post, index) => (
                    <CardNews
                        key={index}
                        slug={post.slug}
                        name={user.name}
                        title={post.title}
                        username={user.username}
                        description={post.description}
                    />
                ))}
            </section>
        </main>
    );
};

interface ServerSideResponse {
    user: UserDTO;
    posts: PostDTO[];
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async (context) => {

    try {
        const { username } = context.query;
        const handleUser = await axios.get(`http://localhost:3000/api/user/${username}`);
        const handlePosts = await axios.get(`http://localhost:3000/api/user/${username}/posts`);

        const user = handleUser.data.data.user;
        const posts = handlePosts.data.data.posts;

        return {
            props: { user, posts }
        };

    } catch (err) {
        return { notFound: true };
    }

};

export default UserPage;