import CheckBoxFilterCategory from "@/components/category/CheckBoxFilterCategory";

export default function FilterBoxCategory() {
    const genders = [
        {key: "Male", value: "male"},
        {key: "Female", value: "female"}
    ];

    const colors = [
        {key: "Red", value: "red"},
        {key: "Apricot", value: "apricot"},
        {key: "Black", value: "black"},
        {key: "Black & White", value: "black_and_white"},
        {key: "Silver", value: "silver"},
        {key: "Tan", value: "tan"}
    ];

    const breeds = [
        {key: "Small", value: "small"},
        {key: "Medium", value: "medium"},
        {key: "Large", value: "Large"}
    ];

    return (
        <>
            <h4 className="font-bold text-2xl text-dark-blue">Filter</h4>
            <div className={"w-full"}>
                <CheckBoxFilterCategory title={"Gender"} options={genders}/>
                <CheckBoxFilterCategory title={"Color"} options={colors}/>
                <div className={"py-4 w-full border-b"}>
                    <h4 className={"font-bold pb-2.5"}>Price</h4>
                    <div className={"grid grid-cols-2 gap-2.5 text-sm"}>
                        <input type={"number"} name={"min-price"}
                               className={"p-2.5 text-sm border-b border-0 border-gray-200 focus:border-0 focus:border-b focus:border-gray-200 focus:ring-0"}
                               placeholder={"Min"}/>
                        <input type={"number"} name={"max-price"}
                               className={"p-2.5 text-sm border-b border-0 border-gray-200 focus:border-0 focus:border-b focus:border-gray-200 focus:ring-0"}
                               placeholder={"Max"}/>
                    </div>
                </div>
                <CheckBoxFilterCategory title={"Breed"} options={breeds}/>
            </div>
        </>
    )
}