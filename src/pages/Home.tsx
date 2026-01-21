import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import OffersCarousel from "@/components/OffersCarousel";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/mockData";

const Home = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      <div className="bg-card rounded-t-3xl -mt-4 relative z-10">
        <OffersCarousel />
        <CategoryGrid />
        <section className="px-4 pb-6">
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            Populares cerca de ti
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
      <WhatsAppButton />
      <BottomNav />
    </div>
  );
};

export default Home;
