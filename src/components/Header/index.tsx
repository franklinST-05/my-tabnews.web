import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full py-10 px-12 flex items-center justify-between uppercase text-sm font-medium border-b border-gray-900">
            <nav className="flex items-center justify-center gap-4">
                <Link href="/">RELEVANTES</Link>
                <Link href="/recent">RECENTES</Link>
            </nav>

            <nav className="flex items-center justify-center gap-4">
                <Link href="/signin">ENTRAR</Link>
            </nav>
        </header>
    );
};

export default Header;