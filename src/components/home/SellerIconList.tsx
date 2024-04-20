import SecondaryButton from "@/components/atoms/form-elements/SecondaryButton";
import Image from "next/image";

export default function SellerIconList({}) {
    return (
        <section className={"py-5 sm:py-[60px] w-full"}>
            <div className={"flex justify-between items-end w-full flex-wrap gap-y-2"}>
                <div className={"flex justify-between items-end flex-col sm:flex-row"}>
                    <p className={"font-medium "}>Proud to be part of</p>
                    <h4 className={"font-bold text-2xl text-dark-blue sm:ml-2"}>Pet Sellers</h4>
                </div>
                <SecondaryButton className={"text-xs sm:inline-flex hidden"}>
                    <span>View all our sellers</span>
                    <span className={"ml-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                        </span>
                </SecondaryButton>
            </div>
            <div className={"flex justify-around items-center flex-wrap mt-7 gap-4 lg:gap-y-8 lg:gap-x-4"}>
                <Image src={"/sheba.png"} alt={"sheba"} width={150} height={112}/>
                <Image src={"/whiskas.png"} alt={"whiskas"} width={150} height={112}/>
                <Image src={"/bakers.png"} alt={"bakers"} width={150} height={112}/>
                <Image src={"/felix.png"} alt={"felix"} width={150} height={112}/>
                <Image src={"/good-boy.png"} alt={"good-boy"} width={150} height={112}/>
                <Image src={"/butcher.png"} alt={"butcher"} width={150} height={112}/>
                <Image src={"/pedigree.png"} alt={"pedigree"} width={150} height={112}/>
            </div>
            <SecondaryButton className={"inline-flex w-full mt-4 justify-center items-center sm:hidden"}>
                <span>View all our sellers</span>
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