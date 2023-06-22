import React, { InputHTMLAttributes } from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return (
        <input
            {...props}
            className={`
                block w-full
                p-4 px-4
                text-sm text-white
                placeholder:text-gray-400 outline-none
                border border-gray-800
                rounded-lg bg-gray-800
                ${className}
            `}
        />
    );
};

export default Input;