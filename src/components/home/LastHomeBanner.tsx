import SecondaryButton from "@/components/atoms/form-elements/SecondaryButton";
import PrimaryButton from "@/components/atoms/form-elements/PrimaryButton";
import Image from "next/image";

export default function LastHomeBanner({}) {
    return (
        <div className={"relative hidden lg:block w-full h-[378px]"}>
            <div className={"flex justify-center items-end absolute w-full h-full"}>
                <div className={"flex justify-center col-span-2 lg:col-span-1 h-full w-full items-end order-1 md:order-2"}>
                    <Image src={"/human-hand-with-pet-leg.webp"}
                           alt={"girl_with_pet"} className={"lg:ml-5 w-full h-full"} width={514} height={342}/>
                </div>
                <div className={"w-full rounded-[20px] col-span-3 lg:col-span-1 order-2 md:order-1"}>
                    <div className={"flex pl-4 lg:pl-16 pb-12 w-full justify-start items-start flex-col"}>
                        <h1 className={"text-[36px] xl:text-[52px] font-extrabold text-dark-blue"}>One more friend</h1>
                        <h2 className={"mt-1 text-[24px] xl:text-[36px] font-bold text-dark-blue"}>Thousands more
                            fun!</h2>
                        <p className={"mt-6 text-left max-w-[400px] font-medium text-rich-black text-xs leading-5"}>Having
                            a pet means you have more joy, a new friend, a happy person who will always be with you to
                            have fun. We have 200+ different pets that can meet your needs!</p>
                        <div className={"flex-start-center gap-4 flex-wrap lg:gap-5 mt-8"}>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="1188" height="386" viewBox="0 0 1188 386" fill="none">
                <g filter="url(#filter0_d_504_1909)">
                    <g clipPath="url(#clip0_504_1909)">
                        <rect width="1180" height="378" rx="20" transform="matrix(-1 0 0 1 1184 0)" fill="#FFB775"/>
                        <rect width="782.292" height="635" rx="99" transform="matrix(-0.904604 0.426252 0.426252 0.904604 407.665 -360)" fill="#FCEED5"/>
                        <rect opacity="0.3" width="787.54" height="787.54" rx="99" transform="matrix(-0.880881 0.473338 0.473338 0.880881 1142.51 28.7205)" fill="url(#paint0_linear_504_1909)"/>
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_504_1909" x="0" y="0" width="1188" height="386" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_504_1909"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_504_1909" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_504_1909" x1="0" y1="0" x2="958.452" y2="218.934" gradientUnits="userSpaceOnUse">
                        <stop offset="0.0616933" stopColor="#FCEED5"/>
                        <stop offset="0.751415" stopColor="#FCEED5"/>
                        <stop offset="1" stopColor="#FFE7BA"/>
                    </linearGradient>
                    <clipPath id="clip0_504_1909">
                        <rect width="1180" height="378" rx="20" transform="matrix(-1 0 0 1 1184 0)" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}