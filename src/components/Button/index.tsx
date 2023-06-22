import React, { HTMLAttributes } from 'react';

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
    return (
        <button
            {...props}
            className={`
                block w-full
                p-4 px-4
                text-sm text-white
                uppercase
                placeholder:text-gray-400 outline-none
                border border-gray-800
                rounded-lg bg-green-700 hover:bg-green-800 focus:bg-green-800
                ${className}
            `}
        />
    );
};

export default Button;