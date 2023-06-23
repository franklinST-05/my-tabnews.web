import React, { ReactNode } from 'react';

interface ChipProps {
    children: ReactNode;
    className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, className }) => {
    return (
        <span
            children={children}
            className={`
                inline-block
                px-3 py-1.5
                rounded-lg
                bg-gray-800
                uppercase text-xs font-bold select-none
                ${className}
            `}
        />
    );
};

export default Chip;