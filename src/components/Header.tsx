import { MapPin, ChevronDown, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <header className="bg-primary text-primary-foreground px-4 pt-6 pb-8 rounded-b-3xl">
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center gap-2 text-sm">
          <MapPin className="w-5 h-5" />
          <span className="max-w-[200px] truncate">
            3V6F+GJ Floridablanca, Santander, Colombia
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button
          onClick={() => navigate("/carrito")}
          className="relative p-2"
        >
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-hooy-pink text-xs font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">¡Hola Juan!</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          className="w-full py-3 px-4 pr-12 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hooy-yellow"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <svg
            className="w-5 h-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
