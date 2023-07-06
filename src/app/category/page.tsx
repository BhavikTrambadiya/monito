import SortFilterCategory from "@/components/category/SortFilterCategory";
import PetPreview from "@/components/home/PetPreview";

export default function Category() {
    return (
        <main className="flex-between-center min-h-screen flex-col max-w-7xl mx-auto px-2 2xl:px-0">
            <div className="flex-between-start w-full gap-5">
                <div className="w-[280px] h-full shrink-0 flex-start-start flex-col">
                    <h4 className="font-bold text-2xl text-dark-blue">Filter</h4>
                    <div className={"divide-y w-full"}>
                        <div className={"py-4 w-full"}>
                            <h4 className={"font-bold pb-2.5"}>Gender</h4>
                            <div className={"flex-between-start flex-col gap-2 text-sm"}>
                                <label htmlFor={"checkbox-gender-male"}>
                                    <input type={"checkbox"} name={"gender"}
                                           className={"w-4 h-4 border-american-silver rounded text-black focus:ring-black"}
                                           id={"checkbox-gender-male"} value={"male"}/>
                                    <span className={"ml-2"}>Male</span>
                                </label>
                                <label htmlFor={"checkbox-gender-female"}>
                                    <input type={"checkbox"} name={"gender"}
                                           className={"w-4 h-4 border-american-silver rounded text-black focus:ring-black"}
                                           id={"checkbox-gender-female"} value={"female"}/>
                                    <span className={"ml-2"}>Female</span>
                                </label>
                            </div>
                        </div>
                        <div className={"py-4 w-full"}>
                            <h4 className={"font-bold pb-2.5"}>Color</h4>
                            <div className={"flex-between-start flex-col gap-2 text-sm"}>
                                <label htmlFor={"checkbox-gender-male"}>
                                    <input type={"checkbox"} name={"gender"}
                                           className={"w-4 h-4 border-american-silver rounded text-black focus:ring-black"}
                                           id={"checkbox-gender-male"} value={"male"}/>
                                    <span className={"ml-2"}>Male</span>
                                </label>
                                <label htmlFor={"checkbox-gender-female"}>
                                    <input type={"checkbox"} name={"gender"}
                                           className={"w-4 h-4 border-american-silver rounded text-black focus:ring-black"}
                                           id={"checkbox-gender-female"} value={"female"}/>
                                    <span className={"ml-2"}>Female</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex-between-center w-full">
                        <div className="flex-start-end gap-2">
                            <h4 className="font-bold text-2xl text-dark-blue">Small Dog</h4>
                            <p className="text-nickel">52 puppies</p>
                        </div>
                        <SortFilterCategory/>
                    </div>
                    <div className={"grid grid-cols-3 gap-5"}>
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
                </div>
            </div>
        </main>
    )
}