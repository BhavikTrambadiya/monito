import Image from "next/image";
import SecondaryButton from "@/components/atoms/form-elements/SecondaryButton";
import PrimaryButton from "@/components/atoms/form-elements/PrimaryButton";

export default function MainCategoryBanner() {
    return (
        <div
            className={"w-full lg:h-[378px] overflow-hidden bg-[linear-gradient(134deg,_#FCEED5_6.17%,_#FCEED5_75.14%,_#FFE7BA_100%)] mb-9 rounded-[20px] relative xl:pl-[51px] px-4 md:px-8 lg:px-10 xl:pt-16 pt-8 xl:pr-[85px] flex flex-col lg:flex-row"}>
            <Image src={"/group-portrait-puppies.webp"} width={650} height={300} alt={"Dogs"}
                   className={"relative lg:absolute lg:bottom-0 order-2 lg:order-1 z-10 w-full lg:max-w-lg xl:max-w-[650px]"}/>
            <div className={"bg-dark-blue w-[816px] rotate-[-175deg] top-[360px] right-[0px] z-0 rounded-[99px] lg:rotate-[160.219deg] lg:right-[-164px] lg:top-[-40px] absolute h-[800px]"}></div>
            <div className={"text-left lg:text-right right-0 z-10 relative order-1 lg:order-2 w-full"}>
                <h1 className={"text-[42px] lg:text-[52px] capitalize font-extrabold text-dark-blue lg:text-white"}>One
                    more friend</h1>
                <h2 className={"mt-1 text-[26px] lg:text-4xl font-bold text-dark-blue lg:text-white"}>Thousands more
                    fun!</h2>
                <p className={"mt-6 font-medium text-rich-black text-xs leading-5 w-full lg:max-w-[420px] lg:ml-auto lg:text-white"}>Having
                    a pet means you have more
                    joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different
                    pets that can meet your needs!</p>
                <div className={"flex items-center justify-start lg:justify-end gap-4 flex-wrap lg:gap-5 mt-6"}>
                    <SecondaryButton className={"gap-2 lg:border-white lg:text-white"}>
                        <span>View Intro</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" className={"fill-dark-blue lg:fill-white"}
                                  strokeLinejoin="round"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path strokeLinecap="round" className={"stroke-dark-blue lg:stroke-white"}
                                  strokeLinejoin="round"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </SecondaryButton>
                    <PrimaryButton className={"lg:bg-white lg:text-rich-black font-medium"}>
                        <span>Explore Now</span>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}