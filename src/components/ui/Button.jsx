import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';



const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    children,
    ...props
}) => {
    const variants = {
        primary: 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm shadow-cyan-200 dark:shadow-none',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700',
        outline: 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800',
        ghost: 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800',
        danger: 'bg-rose-600 text-white hover:bg-rose-700 shadow-sm shadow-rose-200 dark:shadow-none',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    return (
        <button
            className={twMerge(
                clsx(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed',
                    variants[variant],
                    sizes[size],
                    className
                )
            )}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <div className="mr-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : null}
            {children}
        </button>
    );
};

export default Button;
