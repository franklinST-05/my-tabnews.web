import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

interface QuestionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    question: string;
}

const QuestionLink: React.FC<QuestionLinkProps> = ({ question, className, ...props }) => {
    return (
        <span className="block space-x-2 text-light/70">
            {question} <Link {...props} className={` text-info ${className} `} />
        </span>
    );
};

export default QuestionLink;