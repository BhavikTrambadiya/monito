import BlogPreviewList from "@/components/home/BlogPreviewList";
import PetList from "@/components/home/PetList";
import ProductList from "@/components/home/ProductList";
import SellerIconList from "@/components/home/SellerIconList";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto px-2 2xl:px-0">
            <PetList/>
            <ProductList />
            <SellerIconList />
            <BlogPreviewList/>
        </main>
    )
}
