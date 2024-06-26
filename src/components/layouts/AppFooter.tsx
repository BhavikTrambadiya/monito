import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "@/components/atoms/form-elements/PrimaryButton";
import InputField from "@/components/atoms/form-elements/InputField";


export default function AppFooter() {

    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="rounded-tr-[40px] pt-20 rounded-tl-[40px] bg-gradient-to-br from-75% from-papaya-whip to-peach">
            <div className="max-w-e7xl mx-auto px-2 2xl:px-0">
                <div className="rounded-2xl w-full bg-dark-blue p-4 lg:p-8 grid grid-cols-4 md:grid-cols-12 gap-5">
                    <h5 className="text-white font-bold text-xl lg:text-2xl col-span-4 capitalize">Register now so you
                        don&apos;t miss our programs</h5>
                    <div
                        className="bg-white rounded-[14px] flex-between-center p-3 gap-3 col-span-8 flex-col lg:flex-row">
                        <InputField
                            className="rounded-lg border border-manatee outline-none px-7 py-3 w-full focus:border-manatee focus:ring-0"
                            type="email"
                            placeholder="Enter your Email"/>
                        <PrimaryButton type="button"
                                       className="px-8 rounded-lg w-full lg:w-auto justify-center flex-shrink-0">Subscribe
                            Now</PrimaryButton>
                    </div>
                </div>
                <div
                    className="flex-between-center w-full border-b border-american-silver flex-col md:flex-row gap-y-5 py-10">
                    <div className="flex-between-center space-x-5">
                        <Link href={"#"} className="">Home</Link>
                        <Link href={"#"} className="">Category</Link>
                        <Link href={"#"} className="">About</Link>
                        <Link href={"#"} className="">Contact</Link>
                    </div>
                    <div className="flex-between-center space-x-5">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 512 512">
                                <path
                                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                                    fillRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 512 512">
                                <path
                                    d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/>
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 512 512">
                                <path
                                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/>
                                <path
                                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/>
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 512 512">
                                <path
                                    d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"/>
                            </svg>
                            <span className="sr-only">YouTube</span>
                        </a>
                    </div>
                </div>
                <div className="flex-between-center pb-5 pt-12 text-nickel flex-col md:flex-row">
                    <p className={"order-3 md:order-1 mt-2 sm:mt-0"}>© {currentYear} Monito. All rights reserved.</p>
                    <Image src={"/monito_logo.svg"} alt={"Monito"} height={"40"} width={"115"}
                           className={"order-1 md:order-2"}/>
                    <div className="space-x-5 order-2 md:order-2 mt-8 md:mt-0">
                        <a href="#">Terms of Services</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>

        </footer>
    )
}
