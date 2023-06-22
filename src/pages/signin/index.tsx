import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';

const SigninPage: React.FC = () => {
    return (
        <main>
            <form className="w-full max-w-xl mt-10 mx-auto space-y-4">
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Senha"/>
                <Button>Entrar</Button>
            </form>
        </main>
    );
};

export default SigninPage;