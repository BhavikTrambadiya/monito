import SortFilterCategory from "@/components/category/SortFilterCategory";
import PetPreview from "@/components/common/PetPreview";
import FilterBoxCategory from "@/components/category/FilterBoxCategory";
import FilterButton from "@/components/category/FilterButton";
import Breadcrumb from "@/components/common/Breadcrumb";
import MainCategoryBanner from "@/components/category/MainCategoryBanner";

export default function Category({params: {slug}}) {

    const breadcrumbLinks: { link: string, title: string }[] = [
        {
            link: "/",
            title: "Home",
        },
        {
            link: "/category/" + slug,
            title: "Pet",
        }
    ];

    return (
        <main className="flex-between-center min-h-screen flex-col max-w-e7xl mx-auto px-2 2xl:px-0">
            <div className={"w-full"}>
                <Breadcrumb links={breadcrumbLinks}/>
                <MainCategoryBanner/>
            </div>
            <div className="flex-between-start w-full gap-5">
                <div className="w-56 lg:w-[280px] h-full shrink-0 flex-start-start flex-col hidden md:block">
                    <FilterBoxCategory/>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-2 w-full gap-y-6">
                        <div className="flex-start-end gap-2 order-3 md:order-1">
                            <h4 className="font-bold text-2xl text-dark-blue">Small Dog</h4>
                            <p className="text-nickel">52 puppies</p>
                        </div>
                        <div className={"order-1 md:order-2 md:text-right text-left"}>
                            <SortFilterCategory/>
                        </div>
                        <div className={"order-2 md:order-3 text-right"}>
                            <FilterButton/>
                        </div>
                    </div>
                    <div className={"grid grid-cols-2 lg:grid-cols-3 gap-5"}>
                        <PetPreview/>
                        <PetPreview/>
                        <PetPreview/>
                        <PetPreview/>
                        <PetPreview/>
                        <PetPreview/>
                        <PetPreview/>
                        <PetPreview/>
                        <PetPreview/>
                        <PetPreview/>
                    </div>
                    <div className={"flex justify-center items-center gap-x-3 mt-10 mb-16"}>
                        <button type={"button"}
                                className={"px-3 py-1 text-lg font-bold rounded-lg text-dark-blue"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
                            </svg>
                        </button>
                        <button type={"button"}
                                className={"px-3 py-1 text-lg font-bold rounded-lg bg-dark-blue text-white"}>1
                        </button>
                        <button type={"button"} className={"px-3 py-1 text-lg font-bold rounded-lg text-dark-blue"}>2
                        </button>
                        <button type={"button"} className={"px-3 py-1 text-lg font-bold rounded-lg text-dark-blue"}>3
                        </button>
                        <button type={"button"} className={"px-3 py-1 text-lg font-bold rounded-lg text-dark-blue"}>4
                        </button>
                        <button type={"button"}
                                className={"px-3 py-1 text-lg font-bold rounded-lg text-dark-blue"}>...
                        </button>
                        <button type={"button"} className={"px-3 py-1 text-lg font-bold rounded-lg text-dark-blue"}>28
                        </button>
                        <button type={"button"} className={"px-3 py-1 text-lg font-bold rounded-lg text-dark-blue"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}