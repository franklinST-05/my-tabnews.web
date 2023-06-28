import Button from '@/components/Button';
import Input from '@/components/Input';
import QuestionLink from '@/components/QuestionLink';
import { AuthUserSchema } from '@/schemas/User';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const SigninPage: React.FC = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(AuthUserSchema),
    });

    const handleSignin = handleSubmit(async (fields) => {
        try {
            const { data: { data } } = await axios.post('/api/user/auth/signin', fields);
            setCookie('authorization', data.token, {
                secure: true,
            });

            router.push('/');
        } catch (err) {
            if (err instanceof AxiosError) {
                const { status } = err.response!;
                if (status === 401) {
                    axios.post('/api/user/auth/signup/active/resend-email', fields).then(() => {
                        router.push('/auth/check-email');
                    }).catch(() => {
                        toast('Tente novamente em alguns minutos');
                    });
                } else {
                    toast(err.response?.data.error);
                }

            }
        }
    });

    return (
        <main>
            <Head>
                <title>Login · TabNews</title>
            </Head>

            <ToastContainer />

            <form className="w-full max-w-lg mt-10 mx-auto space-y-4" onSubmit={handleSignin}>
                <div>
                    <h1 className="font-bold text-3xl">Login</h1>
                    <p className="text-sm text-desc">Crie e compartilhe experiencias</p>
                </div>
                <Input
                    {...register('email')}
                    error={errors['email']?.message as string}
                    type="email"
                    placeholder="Email"
                />
                <div className="w-full">
                    <Input
                        {...register('password')}
                        error={errors['password']?.message as string}
                        type="password"
                        placeholder="Senha"
                    />
                    <Link href="/auth/forgot-password" className="text-info text-sm">Esqueceu a senha?</Link>
                </div>

                <Button>Entrar</Button>
                <QuestionLink
                    href="/auth/signup"
                    question="Ainda não possui uma conta?"
                > Criar </QuestionLink>
            </form>
        </main>
    );
};

export default SigninPage;