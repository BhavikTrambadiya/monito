import Image from "next/image";
import Link from "next/link";
import InputField from "@/components/atoms/InputField";
import PrimaryButton from "@/components/atoms/PrimaryButton";

export default function AppHeader() {
    return (
        <header className="max-w-e7xl mx-auto flex-between-center py-3 z-50 relative sm:py-[30px] px-2 2xl:px-0 flex-wrap">
            <div className="flex lg:justify-start justify-between items-center gap-x-12 w-full lg:w-auto">
                <button type="button" className={"block lg:hidden"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <span className={"sr-only"}>Mobile-Menu</span>
                </button>
                <Image src={"/monito_logo.svg"} alt={"Monito"} height={"40"} width={"115"}
                       className={"lg:block hidden"}/>
                <Image src={"/monito_logo.svg"} alt={"Monito"} height={"32"} width={"92"}
                       className={"block lg:hidden"}/>
                <button type={"button"} className={"block lg:hidden"}>
                    <svg className="w-5 h-5 flex-shrink-0 fill-black" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.0916 16.9083L15 13.8417C16.2001 12.3454 16.7812 10.4461 16.624 8.53443C16.4667 6.62276 15.583 4.844 14.1546 3.56388C12.7261 2.28377 10.8615 1.5996 8.94408 1.65207C7.02668 1.70454 5.20225 2.48965 3.84593 3.84596C2.48962 5.20228 1.70451 7.02671 1.65204 8.94411C1.59957 10.8615 2.28374 12.7262 3.56385 14.1546C4.84397 15.5831 6.62273 16.4668 8.5344 16.624C10.4461 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C16.9858 18.1448 17.078 18.2068 17.1795 18.2491C17.281 18.2914 17.39 18.3132 17.5 18.3132C17.61 18.3132 17.7189 18.2914 17.8205 18.2491C17.922 18.2068 18.0142 18.1448 18.0916 18.0667C18.2418 17.9113 18.3258 17.7036 18.3258 17.4875C18.3258 17.2714 18.2418 17.0637 18.0916 16.9083V16.9083ZM9.16665 15C8.01292 15 6.88511 14.6579 5.92582 14.0169C4.96653 13.3759 4.21886 12.4649 3.77735 11.399C3.33584 10.3331 3.22032 9.16021 3.4454 8.02865C3.67048 6.8971 4.22605 5.8577 5.04186 5.04189C5.85766 4.22608 6.89707 3.67051 8.02862 3.44543C9.16018 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2914 13.2915C12.1975 14.3854 10.7137 15 9.16665 15V15Z"/>
                    </svg>

                </button>
                <div className={"gap-x-4 xl:gap-x-12 lg:flex justify-start items-center hidden"}>
                    <Link href={"#"} className="text-dark-blue font-bold">Home</Link>
                    <Link href={"#"} className="text-dark-blue font-bold">Category</Link>
                    <Link href={"#"} className="text-dark-blue font-bold">About</Link>
                    <Link href={"#"} className="text-dark-blue font-bold">Contact</Link>
                </div>
            </div>
            <div className="lg:flex hidden justify-between items-center gap-x-1 xl:gap-x-3.5">
                <div
                    className="flex justify-start items-center rounded-full bg-white px-4 max-w-[280px] w-full">
                    <svg className="w-5 h-5 flex-shrink-0 fill-nickel" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.0916 16.9083L15 13.8417C16.2001 12.3454 16.7812 10.4461 16.624 8.53443C16.4667 6.62276 15.583 4.844 14.1546 3.56388C12.7261 2.28377 10.8615 1.5996 8.94408 1.65207C7.02668 1.70454 5.20225 2.48965 3.84593 3.84596C2.48962 5.20228 1.70451 7.02671 1.65204 8.94411C1.59957 10.8615 2.28374 12.7262 3.56385 14.1546C4.84397 15.5831 6.62273 16.4668 8.5344 16.624C10.4461 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C16.9858 18.1448 17.078 18.2068 17.1795 18.2491C17.281 18.2914 17.39 18.3132 17.5 18.3132C17.61 18.3132 17.7189 18.2914 17.8205 18.2491C17.922 18.2068 18.0142 18.1448 18.0916 18.0667C18.2418 17.9113 18.3258 17.7036 18.3258 17.4875C18.3258 17.2714 18.2418 17.0637 18.0916 16.9083V16.9083ZM9.16665 15C8.01292 15 6.88511 14.6579 5.92582 14.0169C4.96653 13.3759 4.21886 12.4649 3.77735 11.399C3.33584 10.3331 3.22032 9.16021 3.4454 8.02865C3.67048 6.8971 4.22605 5.8577 5.04186 5.04189C5.85766 4.22608 6.89707 3.67051 8.02862 3.44543C9.16018 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2914 13.2915C12.1975 14.3854 10.7137 15 9.16665 15V15Z"/>
                    </svg>
                    <InputField type={"text"} placeholder={"Search something here!"}
                                className="w-full outline-none py-3 text-sm focus:ring-0 border-0 focus:border-0"/>
                </div>
                <PrimaryButton type={"button"}>Join the community</PrimaryButton>
                <button type={"button"}>VND</button>
            </div>
        </header>
    )
}
