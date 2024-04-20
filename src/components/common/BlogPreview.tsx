import PrimaryCard from "@/components/atoms/ui-elements/PrimaryCard";
import Image from "next/image";

export default function BlogPreview({}) {
    return (
        <PrimaryCard className={"space-y-2"}>
            <Image width={360} height={240} className="rounded-[10px] w-full max-h-[240px] object-cover"
                   src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                   alt="Dog image"/>
            <button className={"rounded-full bg-vivid text-white px-2.5 py-1 text-xs font-bold"}>Pet knowledge
            </button>
            <h4 className={"font-bold text-rich-black"}>What is a Pomeranian? How to Identify Pomeranian Dogs</h4>
            <p className={"line-clamp-3 text-sm "}>The Pomeranian, also known as the Pomeranian (Pom dog), is always
                in the top of the cutest pets. Not
                only that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
        </PrimaryCard>
    )
};