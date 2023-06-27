import Button from '@/components/Button';
import Input from '@/components/Input';
import QuestionLink from '@/components/QuestionLink';
import Head from 'next/head';
import React from 'react';

const Signup: React.FC = () => {
    return (
        <main>
            <Head>
                <title>Cadastro · TabNews</title>
            </Head>
            
            <form className="w-full max-w-lg mt-10 mx-auto space-y-4">
                <div>
                    <h1 className="font-bold text-3xl">Cadastro</h1>
                    <p className="text-sm text-desc">Crie e compartilhe experiencias</p>
                </div>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button>Entrar</Button>
                <QuestionLink
                    href="/signin"
                    question="Já possui uma conta?"
                > Entrar </QuestionLink>
            </form>
        </main>
    );
};

export default Signup;