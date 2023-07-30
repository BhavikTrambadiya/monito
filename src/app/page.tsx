import BlogPreviewList from "@/components/home/BlogPreviewList";
import PetList from "@/components/home/PetList";
import ProductList from "@/components/home/ProductList";
import SellerIconList from "@/components/home/SellerIconList";
import MainBanner from "@/components/home/MainBanner";

export default function Home() {
    return (<>
            <MainBanner/>
            <main className="flex min-h-screen flex-col items-center justify-between max-w-e7xl mx-auto px-2 2xl:px-0">
                <PetList/>
                <ProductList/>
                <SellerIconList/>
                <BlogPreviewList/>
            </main>
        </>
    )
}
