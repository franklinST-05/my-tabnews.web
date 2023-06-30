import CardNews from '@/components/CardNews';
import { PostDTOIncludesUser } from '@/dtos/PostDTO';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const RecentPage: React.FC<ServerSideResponse> = ({ posts, error }) => {
    return (
        <main>
            <section className="w-full py-8 space-y-8">
                {error && (
                    <div className="flex items-center gap-2 text-danger animate-bounce">
                        <FiAlertCircle />
                        <h1 className="text-sm">{error}</h1>
                    </div>
                )}

                {posts.map((post, index) => (
                    <CardNews
                        key={index}
                        slug={post.slug}
                        title={post.title}
                        name={post.User.name}
                        username={post.User.username}
                        description={post.description}
                    />
                ))}
            </section>
        </main>
    );
};


interface ServerSideResponse {
    posts: PostDTOIncludesUser[],
    error?: string;
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async () => {
    try {
        const { data: { data } } = await axios.get('http://127.0.0.1:3000/api/post?by=title');

        return {
            props: { posts: data.posts }
        };

    } catch (err) {
        return {
            props: {
                posts: [],
                error: 'Erro ao carregar a pagina verifique sua internet'
            }
        };
    }
};


export default RecentPage;