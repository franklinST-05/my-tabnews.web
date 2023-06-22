import Banner from '@/components/Banner';
import CardNews from '@/components/CardNews';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main>
            <Banner />
            <section className="w-full py-8 space-y-8">
                <CardNews/>
                <CardNews/>
            </section>
        </main>
    );
};

export default HomePage;