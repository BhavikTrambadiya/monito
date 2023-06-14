import SecondaryButton from "@/components/atoms/SecondaryButton";
import ProductPreview from "@/components/home/ProductPreview";

export default function ProductList({}) {
    return (
        <section className={"py-[60px] w-full"}>
            <div className={"flex justify-between items-end w-full flex-wrap gap-y-2"}>
                <div>
                    <p className={"font-medium "}>Hard to choose right products for your pets?</p>
                    <h4 className={"font-bold text-2xl text-dark-blue"}>Our Products</h4>
                </div>

                <SecondaryButton className={"text-xs"}>
                    <span>View more</span>
                    <span className={"ml-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                        </span>
                </SecondaryButton>
            </div>
            <div className={"grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5"}>
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
            </div>
        </section>
    )
}