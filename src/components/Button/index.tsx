import React, { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'larger',
}

const Button: React.FC<ButtonProps> = ({ size, className, ...props }) => {
    return (
        <button
            {...props}
            className={`
                w-full
                flex items-center gap-2
                p-4 px-4
                text-sm text-white
                ${size === 'small' ? '!py-2.5 !px-2.5 max-w-max':''}
                ${size === 'larger' ? '!py-4':''}
                uppercase
                placeholder:text-gray-400 outline-none
                border border-gray-800
                rounded-lg bg-green-600
                ${className}
            `}
        />
    );
};

export default Button;