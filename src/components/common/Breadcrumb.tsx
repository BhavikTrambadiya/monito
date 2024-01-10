import Link from "next/link";

export default function Breadcrumb({links}: { links: { link: string, title: string }[] }) {
    return (
        <div className={"flex-start-center -ml-2 my-0 md:my-2"}>
            {links.map(({link, title}: { link: string, title: string }, index: number) =>
                (
                    <Link href={link} key={"breadcrumb-" + index}
                          className={"text-sm text-nickel inline-flex justify-between items-center gap-1.5 hover:bg-gray-100 p-2"}>
                        <span>{title}</span>
                        {(links.length - 1) > index ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}
                                 stroke="currentColor" className="w-4 h-4 stroke-nickel mt-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                            </svg>
                            : <></>}
                    </Link>
                ))
            }
        </div>
    )
}
;