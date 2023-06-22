import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import QuestionLink from '@/components/QuestionLink';

const SigninPage: React.FC = () => {
    return (
        <main>
            <form className="w-full max-w-lg mt-10 mx-auto space-y-4">
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Senha"/>
                <Button>Entrar</Button>
                <QuestionLink href="/signup" question="Ainda não possui uma conta?">Criar</QuestionLink>
            </form>
        </main>
    );
};

export default SigninPage;