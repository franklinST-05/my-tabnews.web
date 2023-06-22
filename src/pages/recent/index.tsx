import CardNews from '@/components/CardNews';
import Header from '@/components/Header';
import React from 'react';

const RecentPage: React.FC = () => {
    return (
        <main>
            <Header />

            <section className="w-full py-8 space-y-8">
                <CardNews />
                <CardNews />
            </section>
        </main>
    );
};

export default RecentPage;