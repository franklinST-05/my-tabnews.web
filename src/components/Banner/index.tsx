import React from 'react';
import Input from '../Input';

const Banner: React.FC = () => {
    return (
        <section className="w-full py-10 space-y-4">
            <div>
                <h1 className="text-6xl font-extrabold" translate="no">TABNEWS</h1>
                <p className="text-base text-gray-400">Os melhores assuntos!</p>
            </div>
            <div className="max-w-xl">
                <Input placeholder="Pesquisar"/>
            </div>
        </section>
    );
};

export default Banner;