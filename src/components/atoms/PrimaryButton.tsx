import {ButtonHTMLAttributes} from "react";

export default function PrimaryButton({
                                          className = '',
                                          disabled,
                                          children,
                                          ...props
                                      }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props}
                className={`inline-flex items-center py-3 px-7 bg-dark-blue text-white rounded-full flex-shrink-0 transition ease-in-out duration-150 ${disabled && 'opacity-25'} ` + className}
                disabled={disabled}>
            {children}
        </button>
    )
}