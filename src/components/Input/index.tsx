import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | undefined;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ error, className, ...props }, ref) => {
    return (
        <div>
            <input
                ref={ref}
                {...props}
                className={`
                    block w-full
                    p-4 px-4
                    text-sm text-light
                    placeholder:text-light/50 outline-none
                    border border-secondary
                    rounded-lg bg-secondary
                    autofill:bg-secondary
                    ${className}
                `}
            />
            {error && (
                <span className="text-sm text-danger line-clamp-1 max-w-max">{error}</span>
            )}
        </div>
    );
});

export default Input;