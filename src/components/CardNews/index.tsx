import React from 'react';
import Link from 'next/link';

interface CardNewsProps {
    key: number;
    slug: string;
    name: string;
    title: string;
    username: string;
    description: string;
}

const CardNews: React.FC<CardNewsProps> = ({ key, slug, title, name, username, description }) => {
    return (
        <div className="w-full max-w-4xl" key={key}>
            <div>
                <p className="text-sm font-medium text-desc">{name}</p>
                <Link href={`/${username}/${slug}`} className="block text-xl w-max max-w-full font-bold border-b-2 border-transparent hover:border-secondary line-clamp-1">
                    {title}
                </Link>
            </div>
            <p className="text-sm text-desc line-clamp-2">{description}</p>
        </div>
    );
};

export default CardNews;