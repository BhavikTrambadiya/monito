import {ButtonHTMLAttributes} from "react";

export default function SecondaryButton({
                                            className = '',
                                            disabled,
                                            children,
                                            ...props
                                        }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props}
                className={`inline-flex items-center py-3 px-7 border-[1.5px] border-dark-blue text-dark-blue rounded-full flex-shrink-0 transition ease-in-out duration-150 ${disabled && 'opacity-25'} ` + className}
                disabled={disabled}>
            {children}
        </button>
    )
}