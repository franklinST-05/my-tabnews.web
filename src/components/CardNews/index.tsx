import React from 'react';
import Link from 'next/link';

const CardNews: React.FC = () => {
    return (
        <div className="w-full max-w-4xl space-y-2">
            <div>
                <time className="text-sm font-medium text-gray-500">Mar 30 de 03</time>
                <Link href="/franklinST-05/nova-linguagem-promete-resolver-todos-os-problemas" className="block text-xl w-max max-w-full font-bold border-b-2 border-transparent hover:border-gray-700 line-clamp-1">Nova linguagem promete resolver todos os problemas</Link>
            </div>
            <p className="text-sm text-gray-400 line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis et voluptatibus dignissimos est rem nisi expedita perferendis dicta illo libero consequatur iusto, similique natus accusamus autem! Alias iusto neque porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa architecto ab doloribus ipsum fugit pariatur provident quos minima. Blanditiis, eum similique! Tempore, distinctio exercitationem repellat non consequatur vero saepe?</p>
        </div>
    );
};

export default CardNews;