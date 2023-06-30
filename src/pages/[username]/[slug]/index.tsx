import Button from '@/components/Button';
import CardComment from '@/components/CardComment';
import Input from '@/components/Input';
import { PostDTO } from '@/dtos/PostDTO';
import { UserDTO } from '@/dtos/UserDTO';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';
import { FiCoffee, FiShare2 } from 'react-icons/fi';

const NewsPage: React.FC<ServerSideResponse> = ({ post, user }) => {
    return (
        <main className="space-y-10">
            <section className="max-w-5xl space-y-10">
                <div>
                    <div className="py-4">
                        <a href={`/${user.username}`} className="text-lg text-light">{user.name}</a>
                        <p className="text-sm text-desc">200 Cafeinas</p>
                    </div>
                    <div>
                        <div className="py-2">
                            <h1 className="text-2xl font-bold">{post.title}</h1>
                        </div>
                        <article>
                            { post.body }
                        </article>
                    </div>
                </div>

                <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-4">
                        <Button size="small" className="!bg-secondary">
                            <FiCoffee />
                        </Button>

                        <Button size="small" className="!bg-secondary">
                            <FiShare2 /> Compartilhar
                        </Button>
                    </div>
                </div>
            </section>

            <section className="max-w-3xl space-y-6 pb-32">
                <div className="py-6 space-y-4">
                    <div>
                        <h1 className="text-lg font-medium">22 Comentarios</h1>
                        <p className="text-xs font-regular text-desc">Participe da interação</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Input className="bg-transparent" placeholder="Adicionar comentario" />
                        <Button className="max-w-max !bg-secondary">Enviar</Button>
                    </div>
                </div>

                <div className="space-y-8">
                    <CardComment />
                    <CardComment />
                </div>
            </section>
        </main>
    );
};


interface ServerSideResponse {
    user: UserDTO;
    post: PostDTO;
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async (context) => {

    try {
        const { username, slug } = context.query;
        const handleUser = await axios.get(`http://localhost:3000/api/user/${username}`);
        const handlePost = await axios.get(`http://localhost:3000/api/post/${slug}`);

        const user = handleUser.data.data.user;
        const post = handlePost.data.data.post;

        return {
            props: { user, post }
        };

    } catch (err) {
        return { notFound: true };
    }

};


export default NewsPage;