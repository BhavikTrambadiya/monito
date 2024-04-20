import {PropsWithChildren} from "react";
import Link from "next/link";

export default function PrimaryCard({className = '', children, ...props}: PropsWithChildren<{ className?: string }>) {
    return (
        <Link href={"/pet/dog"} className={"bg-white shadow-main rounded-xl p-2 " + className}  {...props}>
            {children}
        </Link>
    )
}