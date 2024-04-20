import {InputHTMLAttributes} from 'react';

export default function InputField({type = "text", className = '', ...props}: InputHTMLAttributes<HTMLInputElement>) {

    return (
        <input
            {...props}
            type={type}
            className={
                'w-full outline-none ' +
                className
            }
        />
    );
}