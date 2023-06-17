import SecondaryButton from "@/components/atoms/SecondaryButton";
import BlogPreview from "@/components/home/BlogPreview";

export default function BlogPreviewList({}) {
    return (
        <section className={"py-5 sm:py-[60px] w-full"}>
            <div className={"flex justify-between items-end w-full"}>
                <div>
                    <p className={"font-medium "}>You already know ?</p>
                    <h4 className={"font-bold text-2xl text-dark-blue"}>Useful pet knowledge</h4>
                </div>

                <SecondaryButton className={"text-xs sm:inline-flex hidden"}>
                    <span>View more</span>
                    <span className={"ml-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                        </span>
                </SecondaryButton>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 gap-5"}>
                <BlogPreview/>
                <BlogPreview/>
                <BlogPreview/>
            </div>
            <SecondaryButton className={"inline-flex w-full mt-4 justify-center items-center sm:hidden"}>
                <span>View more</span>
                <span className={"ml-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                        </span>
            </SecondaryButton>
        </section>
    )
}