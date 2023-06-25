import React, { useState } from 'react';
import Button from '../Button';
import { FiCoffee, FiMessageSquare, FiXCircle } from 'react-icons/fi';
import Input from '../Input';

const CardComment: React.FC = () => {

    const [visibleForm, setVisibleForm] = useState<boolean>(false);
    const toogleVisibleForm = () => {
        setVisibleForm(!visibleForm);
    };

    return (
        <div className="space-y-4">
            <div className="space-y-4">

                <div>
                    <a href="/franklinst-05" className="text-sm font-medium text-light/60">Franklinst-05</a>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nemo quidem veritatis soluta consequuntur! Laudantium sunt sapiente quisquam, iusto ipsam libero pariatur exercitationem. Nam, perferendis porro quo suscipit ducimus nisi?</p>
                </div>
                <div className="flex gap-4">
                    <Button size="small" className="!bg-secondary">
                        <FiCoffee />
                    </Button>
                    <Button size="small" className="!bg-secondary" onClick={toogleVisibleForm}>
                        { visibleForm ? <FiXCircle/> : <FiMessageSquare /> }
                        Responder
                    </Button>
                </div>
            </div>
            <div className={`flex items-center gap-4 transition-all overflow-hidden ${visibleForm ? 'h-[55px]': ' opacity-0 h-[0px] '}`}>
                <Input className="bg-transparent" placeholder="Adicionar comentario" />
                <Button className="max-w-max !bg-secondary">Enviar</Button>
            </div>
        </div>
    );
};

export default CardComment;