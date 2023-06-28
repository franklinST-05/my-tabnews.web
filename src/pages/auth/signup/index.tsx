import Button from '@/components/Button';
import Input from '@/components/Input';
import QuestionLink from '@/components/QuestionLink';
import { CreateUserSchema } from '@/schemas/User';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const SignupPage: React.FC = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CreateUserSchema),
    });

    const handleSignup = handleSubmit(async (fields) => {
        try {
            await axios.post('/api/user/auth/signup', fields);
            router.push('/auth/check-email');
        } catch(err) {
            if(err instanceof AxiosError) {
                const { status, data } = err.response!;
                if(status === 409) {
                    toast(data.error);
                }
            }
        }
    });

    return (
        <main>
            <Head>
                <title>Cadastro · TabNews</title>
            </Head>

            <ToastContainer />

            <form className="w-full max-w-lg mt-10 mx-auto space-y-4" onSubmit={handleSignup}>
                <div>
                    <h1 className="font-bold text-3xl">Cadastro</h1>
                    <p className="text-sm text-desc">Crie e compartilhe experiencias</p>
                </div>

                <Input
                    {...register('username')}
                    error={errors['username']?.message as string}
                    type="text"
                    placeholder="Nome de usuario"
                />

                <Input
                    {...register('name')}
                    error={errors['name']?.message as string}
                    type="text"
                    placeholder="Nome"
                />

                <Input
                    {...register('email')}
                    error={errors['email']?.message as string}
                    type="email"
                    placeholder="Email"
                />

                <Input
                    {...register('password')}
                    error={errors['password']?.message as string}
                    type="password"
                    placeholder="Senha"
                />

                <Button>Entrar</Button>
                <QuestionLink
                    href="/auth/signin"
                    question="Já possui uma conta?"
                > Entrar </QuestionLink>
            </form>
        </main>
    );
};

export default SignupPage;