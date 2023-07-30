export default function CheckBoxFilterCategory({title, options}: {
    title: string,
    options: { key: string; value: string }[]
}) {
    return (<div className={"py-4 w-full border-b"}>
            <h4 className={"font-bold pb-2.5"}>{title}</h4>
            <div className={"flex-between-start flex-col gap-2 text-sm"}>
                {options.map(({key, value}) => (
                    <label key={"checkbox-" + title.toLowerCase() + "-" + value}>
                        <input type={"checkbox"} name={title.toLowerCase()}
                               className={"w-4 h-4 border-american-silver rounded text-black focus:ring-black"}
                               value={value}/>
                        <span className={"ml-2"}>{key}</span>
                    </label>
                ))}
            </div>
        </div>
    )

}