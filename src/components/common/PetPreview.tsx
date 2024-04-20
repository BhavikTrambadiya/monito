import PrimaryCard from "@/components/atoms/ui-elements/PrimaryCard";
import Image from "next/image";

export default function PetPreview({}) {
    return (
        <PrimaryCard className={"space-y-2"}>
            <Image width={440} height={280} className="rounded-[10px] max-h-[264px] object-cover"
                   src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                   alt="Dog image"/>
            <h4 className={"font-bold text-rich-black pt-2"}>MO231 - Pomeranian White</h4>
            <p className="text-xs text-nickel gap-2 flex justify-start sm:items-center items-start flex-wrap flex-col sm:flex-row">
                <span className={"space-x-2"}>
                    <span>Gene:</span>
                    <span className="font-bold">Male</span>
                </span>
                <span className="w-1 h-1 bg-nickel sm:block hidden rounded-full"></span>
                <span className={"space-x-2"}>
                    <span>Age:</span>
                    <span className="font-bold">2 months</span>
                </span>
            </p>
            <h5 className={"font-bold text-rich-black text-sm pb-4"}>6.900.000 VND</h5>
        </PrimaryCard>
    )
};