import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
import { FiAtSign, FiCoffee, FiShare2 } from 'react-icons/fi';

const NewsPage: React.FC = () => {
    return (
        <main className="space-y-10">
            <section className="max-w-5xl space-y-10">
                <div>
                    <div className="py-4">
                        <h1 className="text-lg text-white">FranklinST-05</h1>
                        <p className="text-sm text-gray-400">200 Cafeinas</p>
                    </div>
                    <div>
                        <div className="py-2">
                            <h1 className="text-2xl font-bold">⚙️ Essa ferramenta GRÁTIS vai lhe poupar MUITO do seu tempo e os Youtubers não ficarão feliz com isso (Desculpa Mich...Deschamps)</h1>
                        </div>
                        <article>
                            <p>Com certeza, você já deve ter sentido a sensação de que o tempo está passando cada dia mais rápido.</p>
                            <p>Eu tenho esse sentimento diversas vezes, principalmente quando olho para a minha lista de objetivos que fiz no ano novo que ainda não foram realizados, e a ansiedade começa a me observar pela janela de casa.</p>
                            <p>É nesses momentos que eu lembro das palavras do poeta, Boca de 09: "Fuja!"</p>
                            <p>E por conta desse fato, eu sempre busco estar o mais produtivo possível(não que eu seja em 100% do tempo), mesmo que seja um mílimetro a mais que o dia anterior.</p>
                            <p>Esse hábito me fez encontrar uma ferramenta que parece ter sido forjada pelos anões para os deuses(Eitri, o anão programador, criou junto com o machado de Thor)</p>
                            <p>A incrível ferramenta se chama VideoHighLight</p>
                            <p>Ela se baseia em IA para assistir os vídeos em 10X(exatamente isso que você leu) para sumarizar e resumir os trechos de cada vídeo, como se fossem separados em capítulos, e cada capítulo contendo seu resumo.</p>
                            <p>E quais os benefícios você obtém usando essa ferramenta?</p>
                            <p>Essa é bem fácil: <b>UM GANHO EXPONENCIAL DE TEMPO</b></p>
                        </article>
                    </div>
                </div>

                <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-4">
                        <Button size="small" className="!bg-gray-800">
                            <FiCoffee />
                        </Button>

                        <Button size="small" className="!bg-gray-800">
                            <FiShare2 /> Compartilhar
                        </Button>
                    </div>
                </div>
            </section>

            <section className="max-w-3xl space-y-6 pb-32">
                <div className="py-6 space-y-4">
                    <div>
                        <h1 className="text-lg font-medium">22 Comentarios</h1>
                        <p className="text-xs font-regular text-gray-300">Participe da interação</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Input className="bg-transparent" placeholder="Adicionar comentario" />
                        <Button className="max-w-max !bg-gray-800">Enviar</Button>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <div>
                            <a href="/franklinst-05" className="text-sm font-medium text-gray-400">Franklinst-05</a>
                            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nemo quidem veritatis soluta consequuntur! Laudantium sunt sapiente quisquam, iusto ipsam libero pariatur exercitationem. Nam, perferendis porro quo suscipit ducimus nisi?</p>
                        </div>
                        <div className="flex gap-4">
                            <Button size="small" className="!bg-gray-800">
                                <FiCoffee />
                            </Button>
                            <Button size="small" className="!bg-gray-800">
                                <FiAtSign /> Mencionar
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <a href="/franklinst-05" className="text-sm font-medium text-gray-400">Franklinst-05</a>
                            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nemo quidem veritatis soluta consequuntur! Laudantium sunt sapiente quisquam, iusto ipsam libero pariatur exercitationem. Nam, perferendis porro quo suscipit ducimus nisi?</p>
                        </div>
                        <div className="flex gap-4">
                            <Button size="small" className="!bg-gray-800">
                                <FiCoffee />
                            </Button>
                            <Button size="small" className="!bg-gray-800">
                                <FiAtSign /> Mencionar
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NewsPage;