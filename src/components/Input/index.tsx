import React, { InputHTMLAttributes } from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return (
        <input
            {...props}
            className={`
                block w-full
                p-4 px-4
                text-sm text-light
                placeholder:text-light/50 outline-none
                border border-secondary
                rounded-lg bg-secondary
                ${className}
            `}
        />
    );
};

export default Input;