import Button from '@/components/Button';
import Editor from '@/components/Editor';
import Input from '@/components/Input';
import InputChips from '@/components/InputChips';
import Head from 'next/head';
import React, { useState } from 'react';

const PublishPage: React.FC = () => {

    const [keywords, setKeywords] = useState<Array<string>>([]);

    return (
        <main>
            <Head>
                <title>Publicar · TabNews</title>
            </Head>

            <form className="w-full max-w-4xl mt-10 mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <h1 className="font-bold text-3xl">Publicar</h1>
                    <p className="text-sm text-gray-400">Pronto para inovar?</p>
                </div>

                <Input type="text" placeholder="Titulo" />
                <InputChips onSetChip={(c) => setKeywords(c)} placeholder="Palavras chaves"/>
                <Input type="text" placeholder="Descrição" />
                <Editor/>

                <div className="flex items-center justify-end gap-4">
                    <Button className="max-w-max bg-transparent">Cancelar</Button>
                    <Button className="max-w-max">Publicar</Button>
                </div>
            </form>
        </main>
    );
};

export default PublishPage;