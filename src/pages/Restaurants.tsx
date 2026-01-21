import { ArrowLeft, Search, ShoppingCart, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { foodCategories, products } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";

const Restaurants = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card px-4 py-4 border-b border-border sticky top-0 z-40">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-1">
              <ArrowLeft className="w-6 h-6 text-foreground" />
            </button>
            <div>
              <p className="text-xs text-primary font-medium flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-primary" />
                3V6F+GJ Floridablanca, Santander, Colombia
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/carrito")}
            className="relative p-2"
          >
            <ShoppingCart className="w-6 h-6 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Delivery Options */}
        <div className="flex gap-2 mb-4">
          {["Domicilio", "Recoger en tienda", "Servir en mesa"].map(
            (option, idx) => (
              <button
                key={option}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  idx === 0
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {option}
              </button>
            )
          )}
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="¿Qué deseas comer?"
              className="w-full py-3 px-4 pr-12 rounded-full bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
          <button className="p-3 bg-muted rounded-xl">
            <SlidersHorizontal className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      {/* Food Categories */}
      <section className="py-4">
        <div
          className="flex gap-4 overflow-x-auto px-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {foodCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex-shrink-0 flex flex-col items-center gap-2"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-border bg-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-medium text-foreground">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-6">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Para ti</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <WhatsAppButton />
      <BottomNav />
    </div>
  );
};

export default Restaurants;
