import Button from '@/components/Button';
import React from 'react';
import { FiCoffee, FiMessageSquare, FiShare2 } from 'react-icons/fi';

const NewsPage: React.FC = () => {
    return (
        <main>
            <section className="max-w-5xl space-y-10">
                <div>
                    <div className="py-4">
                        <h1 className="text-lg text-white">FranklinST-05</h1>
                        <p className="text-sm text-gray-400">200 Cafeinas</p>
                    </div>
                    <div>
                        <div className="py-2">
                            <h1 className="text-2xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h1>
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nihil cupiditate? Commodi in veritatis impedit iure corrupti eos fugiat voluptas soluta quia culpa, magnam vero numquam cum eius odio maiores.
                        </div>
                    </div>
                </div>

                <div className="space-y-4">

                    <div className="flex items-center gap-4">
                        <Button size="small" className="!bg-gray-800">
                            <FiCoffee />
                        </Button>
                        <Button size="small" className="!bg-gray-800">
                            <FiMessageSquare /> Responder
                        </Button>
                        <Button size="small" className="!bg-gray-800">
                            <FiShare2 /> Compartilhar
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NewsPage;