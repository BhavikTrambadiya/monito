import Image from "next/image";
import SecondaryButton from "@/components/atoms/form-elements/SecondaryButton";
import PrimaryButton from "@/components/atoms/form-elements/PrimaryButton";

export default function MainBanner({}) {
    return (
        <div
            className={"bg-[linear-gradient(134deg,_#FCEED5_6.17%,_#FCEED5_75.14%,_#FFE7BA_100%)] relative lg:h-[696px] overflow-hidden w-full rounded-b-[40px] -mt-[124px]"}>
            <Image src={"/home_background_banner.webp"}
                   className={"object-cover w-full h-full mt-8 sm:mt-auto z-0 absolute top-0 left-0 object-left-top"}
                   width={1440} height={695} alt={"home page banner"}/>
            <div className={"grid grid-cols-1 lg:grid-cols-9 lg:h-full mt-[124px] lg:mt-0 z-40  relative"}>
                <div className={"lg:col-span-4 flex mb-9 justify-center items-start flex-col px-4 lg:pl-32"}>
                    <h1 className={"text-[46px] xl:text-6xl font-extrabold text-dark-blue"}>One more friend</h1>
                    <h2 className={"mt-1 text-[28px] xl:text-[46px] font-bold text-dark-blue"}>Thousands more fun!</h2>
                    <p className={"mt-6 text-justify font-medium text-rich-black text-xs sm:text-sm leading-5"}>Having a
                        pet means you have more joy, a new friend, a happy
                        person who will always be with you to have fun. We have 200+ different pets that can meet your
                        needs!</p>
                    <div className={"flex-start-center gap-4 flex-wrap lg:gap-5 mt-8"}>
                        <SecondaryButton className={"gap-2"}>
                            <span>View Intro</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" className={"fill-dark-blue"} strokeLinejoin="round"
                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path strokeLinecap="round" className={"stroke-dark-blue"} strokeLinejoin="round"
                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </SecondaryButton>
                        <PrimaryButton>
                            <span>Explore Now</span>
                        </PrimaryButton>
                    </div>
                </div>
                <Image src={"/girl_with_pet.webp"}
                       className={"object-cover lg:col-span-5 w-full hidden lg:block h-auto mt-8 sm:mt-auto object-left-top"}
                       width={1440}
                       height={695} alt={"home page banner"}/>
                <div className={"lg:col-span-5 lg:hidden"}>
                    <div
                        className={" max-w-[560px] flex flex-col items-center mx-auto h-[221px] relative sm:mt-auto object-left-top"}>
                        <svg viewBox="-60 0 714 696" className={"h-auto absolute w-full"} fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="46.397" y="56.8857" rx="48" transform="rotate(10.7439 46.397 56.8857)"
                                  fill="#003459"
                                  width="528.983"
                                  height="528.983"/>
                            <rect x="213.329" y="-17" rx="48" transform="rotate(30.6069 213.329 -17)" fill="#F7DBA7"
                                  width="528.983"
                                  height="528.983"/>
                        </svg>
                        <Image src={"/group-portrait-puppies.webp"}
                               className={"object-cover bottom-0 absolute"}
                               width={1440}
                               height={695} alt={"home page banner"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}