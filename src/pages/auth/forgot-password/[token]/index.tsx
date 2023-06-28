import Button from '@/components/Button';
import Input from '@/components/Input';
import { UpdatePasswordUserSchema } from '@/schemas/User';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const ActiveAccountPage: React.FC = () => {

    const router = useRouter();
    const { token } = router.query;

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(UpdatePasswordUserSchema),
    });

    const handleForgotPassword = handleSubmit(async (fields) => {
        console.log(fields);
        try {
            await axios.post(('/api/user/auth/forgot-password/' + token), fields);
            router.push('/auth/signin');
        } catch (err) {
            if (err instanceof AxiosError) {
                toast('Erro interno, tente novamente em alguns minutos');
            }
        }
    });

    return (
        <main>
            <Head>
                <title>Recuperar · TabNews</title>
            </Head>

            <ToastContainer />

            <form className="w-full max-w-lg mt-10 mx-auto space-y-4" onSubmit={handleForgotPassword}>
                <div>
                    <h1 className="font-bold text-3xl">Recuperar Senha</h1>
                    <p className="text-sm text-desc">Lembre-se a senha é apenas sua</p>
                </div>

                <Input
                    {...register('password')}
                    error={errors['password']?.message as string}
                    type="password"
                    placeholder="Nova Senha"
                />

                <Input
                    {...register('confirmPassword')}
                    error={errors['confirmPassword']?.message as string}
                    type="password"
                    placeholder="Confirme a Senha"
                />
                <Button>ALTERAR</Button>
            </form>
        </main>
    );
};

export default ActiveAccountPage;