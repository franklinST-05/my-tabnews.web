import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main className="h-full text-white px-8">

            <Header />
            <Banner />

            <section className="w-full py-8 space-y-8">

                <div className="w-full max-w-4xl space-y-2">
                    <div>
                        <time className="text-sm font-medium text-gray-500">Mar 30 de 03</time>
                        <Link href="/" className="block text-xl w-max max-w-full font-bold border-b-2 border-transparent hover:border-gray-700 line-clamp-1">Nova linguagem promete resolver todos os problemas</Link>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis et voluptatibus dignissimos est rem nisi expedita perferendis dicta illo libero consequatur iusto, similique natus accusamus autem! Alias iusto neque porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa architecto ab doloribus ipsum fugit pariatur provident quos minima. Blanditiis, eum similique! Tempore, distinctio exercitationem repellat non consequatur vero saepe?</p>
                </div>

            </section>

        </main>
    );
}

export default HomePage;