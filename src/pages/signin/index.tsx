import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import QuestionLink from '@/components/QuestionLink';
import Head from 'next/head';

const SigninPage: React.FC = () => {
    return (
        <main>
            <Head>
                <title>Login · TabNews</title>
            </Head>

            <form className="w-full max-w-lg mt-10 mx-auto space-y-4">
                <div>
                    <h1 className="font-bold text-3xl">Login</h1>
                    <p className="text-sm text-gray-400">Crie e compartilhe experiencias</p>
                </div>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Senha"/>
                <Button>Entrar</Button>
                <QuestionLink 
                    href="/signup"
                    question="Ainda não possui uma conta?"
                > Criar </QuestionLink>
            </form>
        </main>
    );
};

export default SigninPage;