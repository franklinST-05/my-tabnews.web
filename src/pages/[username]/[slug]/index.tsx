import Button from '@/components/Button';
import Editor from '@/components/Editor';
import React from 'react';

const NewsPage: React.FC = () => {
    return (
        <main>
            <section className="max-w-5xl space-y-20">
                <div>
                    <div className="py-8">
                        <h1 className="text-2xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    </div>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nihil cupiditate? Commodi in veritatis impedit iure corrupti eos fugiat voluptas soluta quia culpa, magnam vero numquam cum eius odio maiores.
                    </div>
                </div>

                <div>
                    <Editor
                        title="Responder"
                        description="Ajude ou complemente sobre o pensamento acima"
                        placeholder="Inspiri-se e dê sua melhor resposta"
                        toggle
                        actions={(
                            <Button size="small">Responder</Button>
                        )}
                    />
                </div>
            </section>
        </main>
    );
};

export default NewsPage;