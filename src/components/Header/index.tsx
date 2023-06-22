import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full py-10 px-12 flex items-center gap-4 uppercase text-sm font-medium border-b border-gray-900">
            <Link href="/">RELEVANTES</Link>
            <Link href="/recent">RECENTES</Link>
        </header>
    );
};

export default Header;