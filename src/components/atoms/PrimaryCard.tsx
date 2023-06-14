import {PropsWithChildren} from "react";

export default function PrimaryCard({className = '', children, ...props}: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={"bg-white shadow-main rounded-xl p-2 " + className}  {...props}>
            {children}
        </div>
    )
}