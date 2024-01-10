import SecondaryButton from "@/components/atoms/SecondaryButton";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import Image from "next/image";

export default function SecondaryBanner({}) {
    return (
        <div className={"relative w-full h-full max-w-lg lg:max-w-full"}>
            <div className={"flex justify-between lg:justify-center items-center flex-col lg:flex-row absolute w-full h-full"}>
                <div className={"flex justify-center items-center mx-auto lg:items-end order-2 lg:order-1"}>
                    <Image src={"/horizontal-girl-jeans-overalls-kissing-cute-puppy-while-raising-it-air.webp"}
                           alt={"girl_with_pet"} className={"lg:ml-5"} width={514} height={342}/>
                </div>
                <div className={"w-full h-full rounded-[20px] order-1 lg:order-2"}>
                    <div className={"flex pr-4 text-center lg:text-right lg:pr-16 w-full h-full lg:mt-6 justify-center lg:justify-start items-center lg:items-end flex-col"}>
                        <h1 className={"text-[36px] sm:text-[52px] lg:text-[36px] xl:text-[52px] font-extrabold text-dark-blue"}>One more friend</h1>
                        <h2 className={"mt-1 text-[24px] xl:text-[36px] font-bold text-dark-blue"}>Thousands more
                            fun!</h2>
                        <p className={"mt-6 text-center lg:text-right max-w-[400px] font-medium text-rich-black text-xs leading-5"}>Having
                            a pet means you have more joy, a new friend, a happy person who will always be with you to
                            have fun. We have 200+ different pets that can meet your needs!</p>
                        <div className={"flex justify-end lg:justify-start items-center gap-x-4 gap-y-2 flex-wrap lg:gap-5 mt-8"}>
                            <SecondaryButton className={"gap-2"}>
                                <span>View Intro</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24"
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
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className={"w-full h-full block lg:hidden"} viewBox="0 0 382 640" fill="none">
                <g clip-path="url(#clip0_506_1924)">
                    <rect width="382" height="640" rx="20" fill="#003459"/>
                    <rect x="41.4932" y="400.72" width="787.54" height="787.54" rx="99" transform="rotate(28.2512 41.4932 400.72)" fill="#002A48"/>
                    <rect x="-79.3745" y="-354" width="605.027" height="635" rx="75" transform="rotate(11.4104 -79.3745 -354)" fill="#FCEED5"/>
                </g>
                <defs>
                    <clipPath id="clip0_506_1924">
                        <rect width="382" height="640" rx="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <svg viewBox="0 0 1180 378" className={"w-full h-[378px] hidden lg:block"} fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_31_360)">
                    <rect width="1180" height="378" rx="20" fill="#003459"/>
                    <rect x="776.67" y="-360" width="782.292" height="635" rx="99"
                          transform="rotate(25.23 776.67 -360)" fill="#FCEED5"/>
                    <rect x="41.4933" y="28.7205" width="787.54" height="787.54" rx="99"
                          transform="rotate(28.2512 41.4933 28.7205)" fill="#002A48"/>
                </g>
                <defs>
                    <clipPath id="clip0_31_360">
                        <rect width="1180" height="378" rx="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}